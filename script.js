let input = document.querySelector(`#input`);
let buttons = document.querySelectorAll(`button`)

let string = "";
let arr = Array.from(buttons);

arr.forEach(buttons => {
  buttons.addEventListener(`click`, (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string)
      input.value = string;
      string = "";
    }
    else if (e.target.innerHTML == "AC") {
      string = ""
      input.value = string;
    }
    else if (e.target.innerHTML == "DEL") {
      string = input.value.slice(0, string.length - 1)
      input.value = string;
    }
    else if (e.target.innerHTML == "%" || e.target.innerHTML == "/" || e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "*") {
      let lastChar = string.slice(-1);
      if (lastChar == "%" || lastChar == `/` || lastChar == `+` || lastChar == `-` || lastChar == `*`) {

        input.value = string;
      }
      else {
        string += e.target.innerHTML;
        input.value = string;
      }
    }
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  })
})