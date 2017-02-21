$(document).ready(function() {
  let screen = $('#screen')
  let n1 = '';
  let n2 = '';
  let operator = '';
  let result = '';
  let space = ' ';
  let newNum1 = '';
  let arrNum1 = [];

  $('span').click(function(event) {
    let operand = $(event.target).text()

    if ($(this).hasClass("operator") && (screen.text().length === 0)) {
      return;
    }
    else {
      if (!$(this).hasClass("operator")) {
        if (screen.text() === 0) {
          screen.text("");
        }
        n1 += operand;
        screen.append(operand);
      }
      else if ($(this).hasClass("operator")) {
        if (n1 !== "") {
          arrNum1.push(n1);
        }
        if (this.innerText !== '=') {
          operator = this.innerHTML;
        }
        screen.append(space + operator + space);
        n1 = '';

        if ($(event.target).attr("id") === "clear") {
          arrNum1 = [];
          n1 = "";
          screen.text("");
        }

        if ($(event.target).attr("id") === "equals") {
          switch (operator) {
            case '+':
              result = +Number(arrNum1[0]) + +Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result)
              break;
            case '-':
              result = +Number(arrNum1[0]) - +Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result)
              break;
            case 'x':
              result = +Number(arrNum1[0]) * +Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result)
              break;
            case '÷':
              result = +Number(arrNum1[0]) / +Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result)
              break;
            default:
              return "ERROR";
          }
        }
      }
    }
  })
})
