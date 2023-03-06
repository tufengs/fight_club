<?php

namespace App\Controller\User\Role;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class ChangeRoleToSuperVip
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager)
    {
    }

    public function __invoke(Request $request, User $user): Response
    {
        $user->setRoles(['ROLE_SUPER_VIP']);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return new Response(json_encode(['status' => 'success', 'message' => 'User updated to Super Vip']), 200, ["Content-Type" => "application/json"]);
    }
}