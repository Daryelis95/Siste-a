<?php 
namespace App\Util;

class CollectUtil{

    public static function isNotEmpty($collect){
        return $collect != null && count($collect)> 0;
    }

    public static function map($list, $callback){
        if(self::isNotEmpty($list)){
            $list = collect($list);
            $list->map($callback);
        }
        return $list;
    }
}