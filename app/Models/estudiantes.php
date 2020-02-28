<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Estatus;

class Estudiantes extends Model{
	
	protected $table = 'estudiante';

	public static function getAll(){

	  return self::all();
    }

   //traer id
   public static function byId ($id){
   	  
   	  return self::find($id);
   }

   // crear nuevo estudiante
    public static function create ($data){
   	    $model = new Estudiantes();

        $model->cedula = $data['cedula'];
        $model->nombres = $data['nombres'];
        $model->apellidos = $data['apellidos'];
        
        $model->save ();

   	  return $model;
   }
   
   //no me muestres estos estudiantes

   public static function getNotIn ($beneficiados){
       return self::whereNotIn('id', $beneficiados)->get();

    }

  public static function getIn ($ids){

       return self::whereIn('id', $ids)->get();

    }


}
?>