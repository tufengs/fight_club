import { defineStore } from "pinia";
import { ref } from "vue";
import { fightService } from "../service/api/index";

export const useFightStore = defineStore('fight', () => {

    const fight = ref();
    const fights = ref([]);

    async function getFight(fightId: string): Promise<{}> {
        try {
            const res = await fightService._getFight(fightId);
            fight.value = res;
            return res;
        } catch (error) {
            throw error;
        }
    }

    async function getFights(): Promise<{}> {
        try {
            const res = await fightService._getFights();
            fights.value = res;
            return res;
        } catch (error) {
            throw error;
        }
    }

    async function createFight(payload: { event: string, fighterA: string, fighterB: string, winnerValidation: boolean }): Promise<string> {
        try {
            const res = await fightService._createFight(payload);
            return res;
        } catch (error) {
            throw error;
        }
    }
    
    async function validateFight(fightId: string): Promise<string> {
        try {
            const res = await fightService._validateFight(fightId);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async function selectWinner(payload: { fightId: string, winnerId: string }): Promise<string> {
        try {
            const res = await fightService._selectWinner(payload);
            return res;
        } catch (error) {
            throw error;
        }
    }

    return { getFight, getFights, createFight, validateFight, selectWinner, fight, fights }
});