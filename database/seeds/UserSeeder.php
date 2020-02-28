<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insertGetId(
            array(
                'id'=>1,
                'email' => 'admin@unefa.com',
                'name' => 'Admin',
                'password' => Hash::make('123456')
            )
        );
    }
}
