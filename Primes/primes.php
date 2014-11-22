<?php

class Primes {

    public function primeNumbers($start, $end){

        $primeArray = array();

        for($i = $start + 1; $i <= $end; ++$i) {

            $bool = false;

            for($j = 2; $j <= $i/2; ++$j) {
                if ($i % $j === 0) {
                    $bool = true;
                    break;
                }
            }
            if ($bool === false) {
                array_push($primeArray, $i);
            }
        }

        return $primeArray;
    }

    public function printPrimeRemainders(array $primeArray) {
        $primeRemainders = array();
        foreach($primeArray as $value) {
            $remainder = round($value / 3, 3);

            $primeRemainders[$value] = $remainder;
        }
        foreach ($primeRemainders as $key => $value) {
                echo "Prime: $key; Remainder: $value";
                echo "<pre>\n</pre>";
        }
    }
}

?>