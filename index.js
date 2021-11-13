
let arr = [1, 2, 3, 4, 5, 6];
var c=0;
//increment the element in rr by 1
arr.forEach((element, index) => {
           if(element%2==0)
           {
               c=c+1;
           }
    })
    console.log("no. of elements divisibe by 2 are "+c);