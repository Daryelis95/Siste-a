<?php
  namespace App\Http\Controllers\Api;

  use Illuminate\Http\Request;

  use App\Models\Incorporacion;
  use App\Services\IncorporacionService;
  use App\Models\Estudiantes;

  /**
   * 
   */
  class IncorporacionController 
  {
  	
    //metodo para obtener los beneficiados
  	public  function obtenerBeneficiados(){
          
          //obtener datos de service
          return IncorporacionService::beneficiados();

    }
    //obtener no beneficiados
     public function obtenerNoBeneficiados(){
      return IncorporacionService::noBeneficiados();
   }

    //incorporar
    public function incorporar(Request $request){
      return IncorporacionService::incorporar($request->json()->all());
   }
   //desincorporar
   public function desincorporar(Request $request){
    return IncorporacionService::desincorporar($request->json()->all());
     }

     protected $model = Incorporacion::class;
  }
?>