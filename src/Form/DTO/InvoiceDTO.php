<?php

declare(strict_types=1);

namespace App\Form\DTO;

use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Sequentially;
use Symfony\Component\Validator\Constraints\Type;

final class InvoiceDTO
{
    /**
     * @var non-empty-string
     */
    #[Sequentially([
        new NotBlank(),
        new Type(type: 'string'),
    ])]
    public $number;

    /**
     * @var array
     */
    public $lineItems = [];
}
