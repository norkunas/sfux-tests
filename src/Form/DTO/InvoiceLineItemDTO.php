<?php

declare(strict_types=1);

namespace App\Form\DTO;

use Symfony\Component\Validator\Constraints\GreaterThanOrEqual;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Sequentially;
use Symfony\Component\Validator\Constraints\Type;

final class InvoiceLineItemDTO
{
    /**
     * @var non-empty-string
     */
    #[Sequentially([
        new NotBlank(),
        new Type(type: 'string'),
    ])]
    public $name;

    /**
     * @var positive-int
     */
    #[Sequentially([
        new NotBlank(),
        new GreaterThanOrEqual(value: 1),
    ])]
    public $quantity;

    /**
     * @var int|float
     */
    public $unitPrice;
}
