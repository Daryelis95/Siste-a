<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estatus extends Model{
	
	protected $table = 'estatus';

	public static function getAll(){

	  return self::all();
    }


   public static function byId ($id){
   	  
   	  return self::find($id);
   }
   // crear nuevo estatus
  public static function create ($data){
      
      $model = new Estatus();

      $model->id_estudiante = $data['id_estudiante'];
      $model->id_beca = $data['id_beca'];
      $model->incorporacion = true;
      $model->motivos = "";
      
      $model->save ();

   	  return $model;
  }
 //extraer los beneficiados

   public static function beneficiados (){

   //retorname  campo incorporacion
      return self::getBeneficiados()->get();
   }

   private static function getBeneficiados(){
  //seleccionar  campo incorporacion
     $beneficiados = self::where('incorporacion', 1);

     return $beneficiados;
   }

   public static function desincorporar($data){
     $status = self::where('id_estudiante', $data['id_estudiante'])
                ->where('id_beca',$data['id_beca'])->first();

      $status->motivos = $data['motivos'];
      $status->incorporacion = 0;
      $status->save();

      return $status;

   }

 }


?>