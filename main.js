//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

//sum(3) = 3 

//sum(5) = 8

//sum(20) = 28


function createSumFunction() {
    let total = 0;
 
  function sum(value) {
      total += value;
   return total;
 }
 
   return sum;
 }
 
 const sumFunction = createSumFunction();
 
      console.log(sumFunction(9));
      console.log(sumFunction(13));
      console.log(sumFunction(27));