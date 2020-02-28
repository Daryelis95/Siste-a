<?php 
namespace App\Util;

class Util{

    public static function toUrl($s){
        $s = strtolower($s);
        $s = str_replace(" ", "-", $s);
        $s = str_replace("ç","c",$s);
        $s = str_replace("Ç","C",$s);
        $s = str_replace("ñ","n",$s);
        $s = str_replace("Ñ","N",$s);
        return $s;
    }
}