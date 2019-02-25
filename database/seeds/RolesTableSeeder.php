<?php

use App\Role;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            array(
                'role' => 'super_admin',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),

            ),
            array(
                'role' => 'admin',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),

            ),
            array(
                'role' => 'user',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),

            )
        );
        Role::insert($data);
    }
}
