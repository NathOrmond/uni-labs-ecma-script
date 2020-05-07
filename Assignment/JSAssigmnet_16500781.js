class ArithmeticClassRunner{ 
  constructor(){ 
    this.tasks  = new Array;
  }

  /**
  *  adds an anonymous function to the tasks array. This anonymous
  * function should take one argument, x, and return the negative x
  */
  addNegationTask(){ 
    this.tasks.push(  
      function(x){
        return x*-1  
    }  )
  }

  /**
  *  takes a single argument y and adds an anonymous function to 
  *  the tasks array. This anonymous function should take 
  *  one argument, x, and return the addition of x and y.
  */
  addAdditionTask(y){ 
    this.tasks.push(
      function(x){
         return (x + y)
    });
  }

  /**
  * which takes a single argument y and adds an anonymous function 
  * to the tasks array. This anonymous function should take one 
  * argument, x, and return the multiplication of x and y.
  */
  addMultiplicationTask(y){ 
    this.tasks.push(
      function(x){ 
        return (x * y);
      });

  }

  /**
  * Return tasks in list
  **/
  get taskCount(){
    return this.tasks.length;
  }
  
  /**
  *  Starting at startValue, this method should iterate over 
  * the tasks array executing each function
  * on the current value. It then returns the resulting number 
  * after all arithmetic operations have been executed.
  * 
  */
  execute(startValue = 0){  
    for(let iteration = 0; iteration < this.tasks.length; iteration++){ 
      startValue = this.tasks[iteration](startValue);
    }
    return startValue;
  }

}

function printTestNum(testNum){ 
  let output = '\n========================= [TEST  : ' + testNum + ']\n';
  print(output)
}

print = console.log;

function suggestedTestOne(){ 
  taskRunner = new ArithmeticClassRunner();
  taskRunner.addAdditionTask(10);
  taskRunner.addNegationTask();
  taskRunner.addMultiplicationTask(0.5);

  print(taskRunner.execute());
  print(taskRunner.execute(10));
  print(taskRunner.taskCount)

}

printTestNum(1)
suggestedTestOne();

function suggestedTestTwo(){ 
  taskRunner = new ArithmeticClassRunner();
  taskRunner.addAdditionTask(2)
  taskRunner.addMultiplicationTask(4)
  taskRunner.addAdditionTask(10)

  print(taskRunner.execute(2))
  print(taskRunner.execute(-2))
}
printTestNum(2)
suggestedTestTwo();

function suggestedTestThree(){ 
  taskRunner = new ArithmeticClassRunner();
  taskRunner.addAdditionTask(2)
  taskRunner.taskCount = 5

  print(taskRunner.taskCount)
}
printTestNum(3)
suggestedTestThree();
