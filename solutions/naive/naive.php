<?php

$sets = [
    [
        'name' => 'a'
    ],
    [
        'name' => 'b',
        'rides' => 300,
        'vehicles' => 100
    ],
    [
        'name' => 'c',
        'rides' => 10000,
        'vehicles' => 81
    ],
    [
        'name' => 'd',
        'rides' => 10000,
        'vehicles' => 400
    ],
    [
        'name' => 'e',
        'rides' => 10000,
        'vehicles' => 350
    ]
];
$setNumber = 3;
$set = $sets[$setNumber]['name'];
$ridesCount = $sets[$setNumber]['rides'];
$vehicleCount = $sets[$setNumber]['vehicles'];

$rides = range(0, $ridesCount-1);
$vehicles = range(0, $vehicleCount-1);

$k=0;


//Randomly skip 15% of rides
$toskip = $ridesCount * 0.25;
shuffle($rides);
$rides = array_slice($rides, $toskip);

$step = floor(($ridesCount-$toskip)/$vehicleCount);

$buffer = '';
foreach($vehicles as $vehicle) {
    $spread = 7;
    $howMany = rand($step - $spread, $step + $spread );
    $buffer .= $howMany;
    for($j = 0; $j < $howMany; $j++) {
        //Randomize array
        shuffle($rides);
        //Pop element
        $buffer .= ' ' . array_pop($rides);
    }
    $k += $step;
    $buffer .= PHP_EOL;
}

$time = date('His');
$filename = "solution_{$set}/solution_{$set}_{$time}.txt";
$fh = fopen($filename, 'w');
fwrite($fh, $buffer);
//echo $buffer;