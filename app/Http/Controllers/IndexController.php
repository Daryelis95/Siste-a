<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function checkAuth(){
        if(Auth::check()){
          return redirect('/dashboard');
        }else{
            return redirect('/login');
        }
    }

    public function index(){
        return view('app.dashboard', ['title'=>'Dashboard']);
    }

    public function incorporacion (){
        return view('app.modules.incorporacion', ['title'=>'Incorporacion']);
    }

    public function estudiantes (){

        return view('app.modules.estudiantes' , ['title'=>'Estudiantes']);
    }

    
}