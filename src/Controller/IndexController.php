<?php

declare(strict_types=1);

namespace App\Controller;

use App\Form\DTO\InvoiceDTO;
use App\Form\Type\InvoiceType;
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

    #[Route('/{test}', name: 'index', requirements: ['test' => '1|2|3'])]
    public function __invoke(?string $test = null): Response
    {
        $form = $this->formFactory->create(InvoiceType::class);

        return new Response($this->twig->render('index.html.twig', [
            'test' => $test,
            'invoice' => new InvoiceDTO(),
            'form' => $form->createView(),
        ]));
    }
}