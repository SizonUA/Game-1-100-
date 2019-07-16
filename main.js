let name = prompt('Привет!\nКак тебя зовут?');

while (name == '' || name == null) {
  name = prompt('Привет!\nКак тебя зовут?');
}

alert(name + ', давай поиграем в игру!\nЯ загадаю число от 1 до 100, а ты попробуй его отгадать за наименьшее количество попыток.\n\nПосле каждой попытки я скажу - "Мало", "Много" или "Угадал"!');

function random(numberOf) {
  return Math.ceil(Math.random() * numberOf);
}

var number = random(100);
var guess = prompt("Какое число я загадал?");
var numberGuesses = 1;

while (guess != number) {
  if (guess === (null) || ('' || ' ')) { //GOVNOKOD!!!
    guess = prompt("Нужно ввести число от 1 до 100.");
  }

  if (guess > number) {
    guess = prompt("Много.\nПопробуй ещё раз!");
    numberGuesses = numberGuesses + 1;
  }

  if (guess < number) {
    guess = prompt("Мало.\nПопробуй ещё раз!");
    numberGuesses = numberGuesses + 1;
  }

}

alert(name + ", ты угадал!\nЭто число \"" + number + "\"" + ".\nКоличество использованых попыток - \"" + numberGuesses + "\"");