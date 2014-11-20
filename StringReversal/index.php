<html>
    <head>
        <title>String Reversal</title>
    </head>
    <body>
        <h2>Let's reverse some strings!</h2>
        <?php
            require_once("reverseString.php");
            $reverseString = new reverseString();
        ?>
        <h3>"racecar" reversed is <?php $reverseString->reverse("racecar"); ?></h3>
        <h3>"azerty" reversed is <?php $reverseString->reverse("azerty"); ?></h3>
        <h3>"turgid saxophones blew over mick’s jazzy quaff" reversed is <?php $reverseString->reverse("turgid saxophones blew over mick's jazzy quaff"); ?></h3>
        <h3>"maximum velocity minimum energy" reversed is <?php $reverseString->reverse("maximum velocity minimum energy"); ?></h3>
        <h3>"a man a plan a canal panama" reversed is <?php $reverseString->reverse("a man a plan a canal panama"); ?></h3>
    </body>
</html>