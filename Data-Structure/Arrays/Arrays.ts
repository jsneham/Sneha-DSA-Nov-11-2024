const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)
strings.pop(); //O(1)

//unshift
strings.unshift('x') //O(N)

//splice
strings.splice(2, 0, 'alien'); //O(N)

console.log(strings)


function reverse(str: string){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
  
  reverse('Timbits Hi')
  reverse('Timbits Hi')
  reverse3('Timbits Hi')


