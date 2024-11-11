// Time complexity
// O(n) ==> Linear Time
// n means no of input/operations

// O(1) ==> Constant Time
// no of operation stays flat or only 1.
// It doesn't matter how big your input gets (boxes) operation performs only once 
const boxes =[1,2,3,4,5,6,7]
const getBoxesNumber= (boxes:number[]) => {
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)

}
// timeComplexity of getBoxesNumber funtn = O(2)


// What is the Big O of the below function? (Hint, you may want to go line by line)
const input= [1,2,3]
const funChallenge = (input: number[]) =>{
    let a = 10; //O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n) n= input.length
      anotherFunction();  //O(n)
      let stranger = true;  //O(n)
      a++; //O(n)
    }
    return a; //O(1)
  }

  function anotherFunction () {
    console.log('anotherFunction called');
    
  }

  // Time Complexity will be O(3 + 4n) = O(1)+O(1)+O(1)+ O(n)+O(n)+O(n)+O(n)
//   this means it's O(n)


// What is the Big O of the below function? (Hint, you may want to go line by line)
const anotherFunChallenge = (input: number) => {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n) 
    }
    let whoAmI = "I don't know"; // O(1)
  }
  // Big O = 4 + 7n = O(n)


  //Rules of BigO

//   Nested loops O(n^2) Qudratic  Time