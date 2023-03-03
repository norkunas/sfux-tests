<?php

declare(strict_types=1);

namespace App\Controller;

use App\DTO\TodoList;
use App\Form\Type\TodoListType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

#[AsController]
final class IndexController
{
    public function __construct(
        private readonly FormFactoryInterface $formFactory,
        private readonly Environment $twig,
    ) {
    }

    #[Route('/')]
    public function __invoke(): Response
    {
        $form = $this->formFactory->create(TodoListType::class);

        return new Response($this->twig->render('index.html.twig', [
            'list' => new TodoList(),
            'form' => $form->createView(),
        ]));
    }
}
