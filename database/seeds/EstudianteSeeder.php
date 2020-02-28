<?php

use Illuminate\Database\Seeder;
use App\Models\Estudiantes;

class EstudianteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $estudiantes = [
            array(
                'cedula' => '21542854',
                'nombres' => 'Carlos Jose',
                'apellidos' => 'Mata Lopez'
            ),array(
                'cedula' => '22451745',
                'nombres' => 'Carla Josefina',
                'apellidos' => 'Rodriguez Lopez'
            ),array(
                'cedula' => '23652145',
                'nombres' => 'Ana Carmen',
                'apellidos' => 'Sarmiento Lopez'
            ),array(
                'cedula' => '19854752',
                'nombres' => 'Miguel Antonio',
                'apellidos' => 'Perez Lopez'
            ),array(
                'cedula' => '22859632',
                'nombres' => 'Jose Felipe',
                'apellidos' => 'Castro Lopez'
            )
        ];
        foreach($estudiantes as $estudiante){
            Estudiantes::create($estudiante);
        }
    }
}
