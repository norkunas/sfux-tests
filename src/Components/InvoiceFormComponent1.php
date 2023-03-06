<?php

declare(strict_types=1);

namespace App\Components;

use App\Form\DTO\InvoiceDTO;
use App\Form\Type\InvoiceType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveCollectionTrait;

#[AsLiveComponent(name: 'InvoiceForm1', template: 'components/InvoiceForm.html.twig')]
final class InvoiceFormComponent1
{
    use ComponentWithFormTrait;
    use DefaultActionTrait;
    use LiveCollectionTrait;

    #[LiveProp(fieldName: 'data')]
    public InvoiceDTO $invoice;

    public function __construct(
        private readonly FormFactoryInterface $formFactory,
    ) {
    }

    protected function instantiateForm(): FormInterface
    {
        return $this->formFactory->create(InvoiceType::class, $this->invoice);
    }
}
