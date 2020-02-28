@extends('template')
@section('content')
  <div ng-controller="IncorporacionCtrl">
    
    <div class="row">
     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="panel  with-scroll" zoom-in>
            <div class="panel-heading clearfix">
                <h3 class="panel-title">Listado de Becados</h3>
            </div>
            <div class="panel-body height-fixed">
                
                <super-table header="header" data="noBeneficiadosTable" options="options" ng-if="noBeneficiadosTable">
                    
                </super-table>
            </div>
            <div class="panel-footer">
                <div class="clearfix">
                    <button class="btn btn-sm btn-primary" ng-click="showModal()">Desincorporar</button>
                </div>
         </div>
        </div>
     </div>
    </div>

    <div class="row">
     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="panel  with-scroll" zoom-in>
            <div class="panel-heading clearfix">
                <h3 class="panel-title">Listado de Becados</h3>
            </div>
            <div class="panel-body height-fixed">
                
                <super-table header="header" data="beneficiadosTable" options="options" ng-if="beneficiadosTable">
                    
                </super-table>
            </div>
            <div class="panel-footer">
                <div class="clearfix">
                    <button class="btn btn-sm btn-primary" ng-click="showModal()">Desincorporar</button>
                </div>
         </div>
        </div>
     </div>
    </div>

  </div>
@endsection

<!--seccion javascritp-->
@section('custom-script')
    <script src="/js/controllers/IncorporacionCtrl.js"></script> 
@endsection