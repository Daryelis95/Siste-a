<?php 
namespace App\Services;
use App\Models\Becas;
use App\Models\Estudiantes;
use App\Models\Estatus;

use App\Util\CollectUtil;

class IncorporacionService 
{
    //devolver estudiantes que poseen becas
  public static function beneficiados (){
    
    //llamar una funcion estatica 
    // return Estatus::Beneficiados();
     $ids = array();
    $beneficiados = Estatus::beneficiados();

    foreach($beneficiados as $beneficiado){
      array_push($ids, $beneficiado->id_estudiante);
    }
    return Estudiantes::getIn($ids);
   }

 //muestrame los estudiantes no beneficiados
  public static function noBeneficiados(){
    $ids = array();
    $beneficiados = Estatus::beneficiados();

    foreach($beneficiados as $beneficiado){
      array_push($ids, $beneficiado->id_estudiante);
    }
  	return Estudiantes::getNotIn($ids);
  }
  public static function incorporar($data){
    return Estatus::create($data);
  }

  public static function desincorporar($data){
    return Estatus::desincorporar($data);
  }

 }
?>