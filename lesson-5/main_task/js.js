nextPrime:
  for (var i = 2; i <= 100; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(`Делители числа ${i}: 1 и ${i}`); 
  }



