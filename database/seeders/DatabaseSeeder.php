<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this ->call(TodosSeender::class);

        /*$users= User::factory(20)
        ->create()
        ->each(function($user){

            $image = Image::factory()
            ->user()
            ->make();

            $user->image()->save($image);
            
        });*/
        // \App\Models\User::factory(10)->create();
    }
}
