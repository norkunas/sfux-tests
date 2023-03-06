<?php

declare(strict_types=1);

namespace App\Form\Type;

use App\Form\DTO\InvoiceDTO;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\LiveComponent\Form\Type\LiveCollectionType;

final class InvoiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('number', TextType::class, [
                'label' => 'Order number',
            ])
            ->add('lineItems', LiveCollectionType::class, [
                'allow_add' => true,
                'allow_delete' => true,
                'entry_type' => InvoiceLineItemType::class,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => InvoiceDTO::class,
        ]);
    }
}
