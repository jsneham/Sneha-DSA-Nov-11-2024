const findColor = (array : string[]) =>{
    array.forEach((color :string)=>{
        if(color==='white'){
            console.log('found it');
            
        }
    })
}

const findColor2 = (array: string[]) =>{
    for(let color of array){
        if(color==='white'){
            console.log('found it');
            
        }
    }
}

const colorArray= ['red','pink', 'white'];
findColor(colorArray);
findColor2(colorArray)