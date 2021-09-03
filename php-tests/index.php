<?php

class Test {

    public function start($a, & $b=null)
    {
        $b = $a;

        $this->stop();
    }

    private function stop()
    {
        echo 'stop';
    }
}

$test = new Test();

$test->start(10,$testB);


echo "\n";
echo $testB;
echo "\n";
asdasda