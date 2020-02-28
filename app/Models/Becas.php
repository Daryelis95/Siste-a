<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Becas extends Model{
	
	protected $table = 'beca';

	public static function getAll(){

	  return self::all();
    }


   public static function byId ($id){
   	  
   	  return self::find($id);
   }

    public static function create ($data){
   	  
   	   $model = new Becas();

        $model->tipo = $data['tipo'];
       
        $model->estado = $data['estado'];

        
   	  return $model;
   }

 }


?>