function getValueFromNumberInput(dice, dice1) {
    let interval = setInterval(function () {
        let dice = Math.floor(Math.random() * 6 + 1);
        switch (dice) {
            case 1:
                document.getElementById('display').innerHTML = (`<img src='../images/Dice1.png' style='width: 140px'>`);
                break;
            case 2:
                document.getElementById('display').innerHTML = (`<img src='../images/Dice2.png' style='width: 140px'>`);
                break;
            case 3:
                document.getElementById('display').innerHTML = (`<img src='../images/Dice3.png' style='width: 140px'>`);
                break;
            case 4:
                document.getElementById('display').innerHTML = (`<img src='../images/Dice4.png' style='width: 140px'>`);
                break;
            case 5:
                document.getElementById('display').innerHTML = (`<img src='../images/Dice5.png' style='width: 140px'>`);
                break;
            case 6:
                document.getElementById('display').innerHTML = (`<img src='../images/Dice6.png' style='width: 140px'>`);
                break;
            default:
                document.getElementById('display').innerHTML = (`you don't have that number on dice`);
        }


        let dice1 = Math.floor(Math.random() * 6 + 1);
        switch (dice1) {
            case 1:
                document.getElementById('display1').innerHTML = (`<img src='../images/Dice1.png' style='width: 140px'>`);
                break;
            case 2:
                document.getElementById('display1').innerHTML = (`<img src='../images/Dice2.png' style='width: 140px'>`);
                break;
            case 3:
                document.getElementById('display1').innerHTML = (`<img src='../images/Dice3.png' style='width: 140px'>`);
                break;
            case 4:
                document.getElementById('display1').innerHTML = (`<img src='../images/Dice4.png' style='width: 140px'>`);
                break;
            case 5:
                document.getElementById('display1').innerHTML = (`<img src='../images/Dice5.png' style='width: 140px'>`);
                break;
            case 6:
                document.getElementById('display1').innerHTML = (`<img src='../images/Dice6.png' style='width: 140px'>`);
                break;
            default:
                document.getElementById('display1').innerHTML = (`you don't have that number on dice`);
        }

        let result = setInterval(function () {
            if (dice === 1 && dice1 === 1) {
                document.getElementById('display2').innerHTML = (`you lose, better luck next time <img src='../images/sad.gif' style='width: 300px'>`);
            }
            else if (dice === 1 && dice1 === 2) {
                document.getElementById('display2').innerHTML = (`you lose, better luck next time <img src='../images/sad.gif' style='width: 300px'>`);
            }
            else if (dice === 2 && dice1 === 1) {
                document.getElementById('display2').innerHTML = (`you lose, better luck next time <img src='../images/sad.gif' style='width: 300px'>`);
            }
            else if (dice === 2 && dice1 === 2) {
                document.getElementById('display2').innerHTML = (`you lose, better luck next time <img src='../images/sad.gif' style='width: 300px'>`);
            }
            else if (dice === 4 && dice1 === 4) {
                document.getElementById('display2').innerHTML = (`you lose, better luck next time <img src='../images/sad.gif' style='width: 300px'>`);
            }
            else if (dice === 3 && dice1 === 3) {
                document.getElementById('display2').innerHTML = (`you win !!! <img src='../images/fallMoney.gif' style='width: 300px'>`);
            }
            else if (dice === 5 && dice1 === 5) {
                document.getElementById('display2').innerHTML = (`you win !!! <img src='../images/fallMoney.gif' style='width: 300px'>`);
            }
            else if (dice === 5 && dice1 === 6) {
                document.getElementById('display2').innerHTML = (`you win !!! <img src='../images/fallMoney.gif' style='width: 300px'>`);
            }
            else if (dice === 6 && dice1 === 5) {
                document.getElementById('display2').innerHTML = (`you win !!! <img src='../images/fallMoney.gif' style='width: 300px'>`);
            }
            else if (dice === 6 && dice1 === 6) {
                document.getElementById('display2').innerHTML = (`you win !!! <img src='../images/fallMoney.gif' style='width: 300px'>`);
            }
            else {
                document.getElementById('display2').innerHTML = ('the next to shake the dice');
            }
        }, 0);
        setTimeout(function () {
            clearInterval(result);
        }, 0);
    }, 100);
    setTimeout(function () {
        clearInterval(interval);
    }, 400);
};