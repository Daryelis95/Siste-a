<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/notifications', 'TemplateController@notifications');

Route::get('/messages', 'TemplateController@messages');

Route::get('/incorporacion/beneficiados','Api\IncorporacionController@obtenerBeneficiados');

Route::get('/incorporacion/noBeneficiados','Api\IncorporacionController@obtenerNoBeneficiados');

Route::post('/incorporacion','Api\IncorporacionController@incorporar');

Route::put('/incorporacion','Api\IncorporacionController@desincorporar');

Route::resource('incorporacion','Api\IncorporacionController');

?>


