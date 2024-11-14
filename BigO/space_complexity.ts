// What Causes Space Complexity?
// Variables
// Data Structures
// Function Call
// Allocations


//#5 Space complexity O(1)
function boooo(n:number) {
    for (let i = 0; i < n; i++) {
      console.log("booooo");
    }
  }
  
  // #6 Space complexity O(n) because we are creating array data structure.
  function arrayOfHiNTimes(n:number) {
    var hiArray:string[] = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = "hi";
    }
    return hiArray;
  }
  
  arrayOfHiNTimes(6);