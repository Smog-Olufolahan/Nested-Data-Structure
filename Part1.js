/* PART 1: Given the following nested object: */
var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  
  /* Question 1: Using a for loop, console.log all of the numbers in the primeNumbers array. */
  
  var primeNumber = nestedData.innerData.numberData.primeNumbers;
  for(var i = 0; i < primeNumber.length; i++) {
    console.log(primeNumber[i]);
  }
  
  /* Question 2: Using a for loop, console.log all of the even Fibonnaci numbers. */
  
  var evenFibonnaci = nestedData.innerData.numberData.fibonnaci;
  for(var i = 0; i < evenFibonnaci.length; i++) {
    if(evenFibonnaci[i] % 2 === 0) {
      console.log(evenFibonnaci[i]);
    }
  }
  
  /* Question 3: Console.log the value "second" inside the order array. */
  
  console.log(nestedData.innerData.order[1]);
  
  /* Question 4: Invoke the addSnack function and add the snack "chocolate". */
  
  nestedData.innerData.addSnack('chocolate');
  
  /* Question 5 : Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function? */
  
  // The 'this' refers to the innerData object, whereas addSnack method is a child of the innerData object.