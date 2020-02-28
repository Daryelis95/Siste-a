<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CrudController extends Controller
{
    protected $model;

    public function index(){
        return response()->json($this->model::getAll());
    }

    public function show($id){
        return response()->json($this->model::byId($id));
    }

    public function store(Request $request){
        return response()->json($this->model::create($request->json()->all()));
    }

    public function update(Request $request, $id){
        return response()->json($this->model::updateModel($request->json()->all(), $id));
    }
}
