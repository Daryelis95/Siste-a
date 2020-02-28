<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TemplateController extends Controller
{
    
    public function notifications(){
        $notifications = array(
            array(
                'user'=> array(
                    'id'=>1,
                    'name'=>'Carlos Perez',
                    'image'=>'/assets/img/shopping-cart.svg'
                ),
                'description'=>'Esta es una descripcion',
                'time'=>'2 hrs ago'
            )
        );
        return response()->json($notifications);
    }

    public function messages(){
        $messages = array(
            array(
                'user'=> array(
                    'id'=>1,
                    'name'=>'Juan Perez',
                    'image'=>'/assets/img/shopping-cart.svg'
                ),
                'description'=>'Esta es una descripcion de un mensaje',
                'time'=>'3 hrs ago'
            )
        );
        return response()->json($messages);
    }

    

}
