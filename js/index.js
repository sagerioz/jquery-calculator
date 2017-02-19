$(document).ready(function() {
  let screen = $('#screen')
  let n1 = '';
  let n2 = '';
  let operator = '';
  let result = '';
  let space = ' ';
  let newNum1 = '';
  let arrNum1 = [];
  console.log("SCREEN", $(screen));

  $('span').click(function(event) {
    let operand = $(event.target).text()
    //console.log("operand", operand);

    // if (!$(this).hasClass("operator")) {
    //   n1 = (operand);
    //   n2 = (operand);
    //   screen.append(n1)
    //   //console.log(n1);
    // //  console.log("This", this);
    // } else if ($(this).hasClass("operator")) {
    //   temp = n1;
    //   n1 = "";
    //   operator = this.innerHTML;
    //   screen.append(space + operator + space)
    //   console.log("temp", temp);
    //   //temp = n1 + space + this.innerHTML;
    //
    //   //console.log("OPERATOR?", operator);
    //   //screen.text(space + temp + space)
    // }

    if (!$(this).hasClass("operator")) {

      n1 += operand;

      screen.append(operand);
      console.log(n1);
    } else if ($(this).hasClass("operator")) {
      arrNum1.push(n1);
      console.log(arrNum1);
      operator = this.innerHTML;
      screen.append(space + operator + space);
      n1 = '';
    } else {}

    if (true) {

    }


    switch (operator) {
      case '+':
        result = +(n1) + +(n2)
        break;
      case '-':
        result = +(n1) - +(n2)
        break;
      case '*':
        result = +(n1) + +(n2)
        break;
      case '-':
        result = +(n1) - +(n2)
        break;
      default:
        return true;
    }


    // console.log("MY EVENT TARGET", $(event.target).text());






  })









})
