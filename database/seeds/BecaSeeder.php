<?php

use Illuminate\Database\Seeder;
use App\Models\Becas;

class BecaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $becas = [
            array(
                'tipo' => 'Monetaria',
                'estado' => 'ACTIVA'
            ),array(
                'tipo' => 'Estudiantil',
                'estado' => 'ACTIVA'
            ),array(
                'tipo' => 'Social',
                'estado' => 'ACTIVA'
            )
        ];
        foreach($becas as $beca){
            Becas::create($beca);
        }
    }
}
