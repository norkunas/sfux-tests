<?php

declare(strict_types=1);

namespace App\Form\DTO;

use App\Enum\WeightUnit;

final class PersonDTO
{
    public $weight = WeightUnit::Kg;
}
