<?php

class reverseString {

    public function reverse($string){
        if(!is_string($string)) {
            exit("You didn't enter a string!");
        }

        $reverse = '';

        $strlen = strlen($string);

        for($i = $strlen - 1; $i >= 0; $i--) {
            $reverse .= substr($string, $i, 1);
        }

        echo "\"" . $reverse . "\"";
    }

}

?>