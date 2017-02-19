$(document).ready(function() {
  let screen = $('#screen')
  let n1 = '';
  let n2 = '';
  let operator = '';
  let result = '';
  let space = ' ';
  let newNum1 = '';
  let arrNum1 = [];
  // console.log("SCREEN", $(screen));

  $('span').click(function(event) {
    let operand = $(event.target).text()
    console.log("Array Num 1", arrNum1);

    if (!$(this).hasClass("operator")) {
      if (screen.text() == 0) {
        screen.text("");
      }
      n1 += operand;
      console.log("n1", n1);
      screen.append(operand);
      // console.log(n1);
    } else if ($(this).hasClass("operator")) {
      console.log("I'm here....");

      // if (arrNum1.length === 0) {
      //   screen.text("Error!")
      // }

      if (n1 != "") {
        arrNum1.push(n1);
      }
      // console.log(arrNum1);
      if (this.innerText !== '=') {
        // console.log("TYPE OF OPERATOR", operator);
        // console.log("THIS HTML typeof length", this.innerText.length);

        operator = this.innerHTML;
      }


      screen.append(space + operator + space);
      n1 = '';

      if ($(event.target).attr("id") === "clear") {
        arrNum1 = [];
        n1 = "";
        screen.text("0");
      }

      if ($(event.target).attr("id") === "equals") {
        // console.log("I clicked equals");
        // console.log("O", operator);

        // let operator =
        switch (operator) {
          case '+':
            result = +(arrNum1[0]) + +(arrNum1[1])
            screen.text(result)
            console.log("RESULT +", result);
            arrNum1 = [];
            arrNum1.push(result)
            break;
          case '-':
            result = +(arrNum1[0]) - +(arrNum1[1])
            screen.text(result)
            console.log("RESULT -", result);
            arrNum1 = [];
            arrNum1.push(result)
            break;
          case 'x':
            result = +(arrNum1[0]) * +(arrNum1[1])
            screen.text(result)
            console.log("RESULT *", result);
            arrNum1 = [];
            arrNum1.push(result)
            break;
          case '÷':
            result = +(arrNum1[0]) / +(arrNum1[1])
            screen.text(result)
            console.log("RESULT ÷", result);
            arrNum1 = [];
            arrNum1.push(result)
            break;
          default:
            return "whoops";
        }
      }

      // console.log("MY EVENT TARGET", $(event.target).text());


    }



  })









})
