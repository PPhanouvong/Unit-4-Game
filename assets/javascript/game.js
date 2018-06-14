
var name = prompt("Players name is ");
alert("Hello " + name);
$("#name").html(name);

//Global variables
var c1 = (Math.floor(Math.random() * (12 - 1) + 1));
var c2 = (Math.floor(Math.random() * (11 - 1) + 1));
var c3 = (Math.floor(Math.random() * (10 - 1) + 1));
var c4 = (Math.floor(Math.random() * (9 - 1) + 1));
var win = 0;
var lose = 0;
var goal;
var loss = new Audio("assets/images/Loss.wav");
var wins = new Audio("assets/images/Win.wav");


//Game Reset
function reset() {

    number = (Math.floor(Math.random() * (120 - 19) + 19));
    c1 = (Math.floor(Math.random() * (12 - 1) + 1));
    c2 = (Math.floor(Math.random() * (11 - 1) + 1));
    c3 = (Math.floor(Math.random() * (10 - 1) + 1));
    c4 = (Math.floor(Math.random() * (9 - 1) + 1))
    goal = 0;

    $(".displayNumber").html(number);
    $(".displayScore").html(goal);

    start();
}

//Game Start
function start() {

    number = (Math.floor(Math.random() * (120 - 19) + 19));
    c1 = (Math.floor(Math.random() * (12 - 1) + 1));
    c2 = (Math.floor(Math.random() * (11 - 1) + 1));
    c3 = (Math.floor(Math.random() * (10 - 1) + 1));
    c4 = (Math.floor(Math.random() * (9 - 1) + 1));
    goal = 0;

    $(".displayNumber").html(number);
    $(".displayScore").html(goal);

    $(".GemR").attr("value", c1);

    $(".GemB").attr("value", c2);

    $(".GemG").attr("value", c3);

    $(".GemY").attr("value", c4);

    $(".box").off().on('click', function () {

        var change = $(this).attr("value");
        goal = parseInt(goal) + parseInt(change);
        $(".displayScore").html(goal);

        if (number === goal) {

            wins.play();
            alert("Win");
            win++;
            $("#wins").html(win);
            $(".displayScore").html(0);
            reset();
        }
        else if (goal > number) {

            loss.play();
            alert("Lose");
            lose++;
            $("#losses").html(lose);
            $(".displayScore").html(0);
            reset();
        }
    });



}
start();
