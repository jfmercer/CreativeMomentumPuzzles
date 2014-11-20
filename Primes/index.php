<html>
    <head>
        <title>Primes</title>
    </head>
    <body>
        <h2>Here are Primes between 0 and 1,000:</h2>
        <?php
            require_once("primes.php");
            $primes = new Primes();
            $primeArray = $primes->primeNumbers(0, 1000);
            foreach($primeArray as $value) {
                echo $value . " ";
            }
        ?>
        <h2>These are the remainders of the primes when divided by zero:</h2>
        <?php
            $primes->printPrimeRemainders($primeArray);
        ?>
    </body>
</html>
