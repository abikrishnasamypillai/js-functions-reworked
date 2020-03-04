//add functions
//add two numbers

   function addition(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1+num_2;
  }
  console.log(addition());
//output :70
  //sub function
  //returns difference of two numbers
  var Subtract=subtract(10,19)
  function subtract(num_1,num_2) 
  {
    return(Math.abs(num_1-num_2));
  }
   console.log(Subtract);
//output :9

//multiply 2 numbers
//multiplies 2 numbers
 var Mul=mul(10,19)
  function mul(a,b) 
  {
    return(a*b);
  }
   console.log(Mul);
//output :190

//division
//divides 2 number using function
var Div=div(16,4)
  function div(x,y) {
    return (x/y);
  }
  console.log(Div);
  //output :4

//modulo operations
//modulo gives remainder of the division
var Mod=modulo(22,10)
    function modulo(num_1,num_2) {
    return (num_1%num_2);
  }
  console.log(Mod);
//output :2

//power function
//gives the value after applying power
var Pow=power(5,2);
    function power(num_1,num_2) {
    return(Math.pow(num_1,num_2));
  }
   console.log(Pow);
   //output :25

//compares string values
var str=compareString('abi','abii');
function compareString(str_1,str_2) {
return (str_1===str_2);
      }
console.log(str);
//output :false

//compare given numbers
var str1=compareNum(56,56);
function compareNum(num_1,num_2) {
  return(num_1===num_2);
}
 console.log(str1);
 //output :true

//compare the given datatypes
var str2=compareValue(123,'123');
  function compareValue(num_1,str_1)
  {
    let num_1 = 123;
    let str_1 = "123";
    return (num_1===str_1)
  }
   console.log(str2);
   //output :false
  
//check vowels
//it will check if it is a vowel and returns true or false
var vowel=isVowel('j')
function isVowel(arg) {
  return(arg.includes('a')||arg.includes('e')||arg.includes('i')||arg.includes('o')||arg.includes('u'))
}
console.log(vowel)
//output :false

//PRIME NUMBER OR NOT
var prime=Prime(27)
function Prime(num){
  let i,count=0;
for(i=1;i<num;i++)
{
  if(num%i==0)
  {
    count++;
  }
}
if(count==2)
{
  return('Prime');
}
else
{
  return('Not prime');
}
}
console.log(prime);
//output :Not prime

//GRADEFINDER
var gradeFinder=grade(81);
function grade(mark)
{
if(mark>=90 && mark<=100)
{
  console.log('A');
}
else if(mark>=80 && mark<90) {
  console.log('B');
}
else if(mark>=70 && mark<80) {
  console.log('C');
}
else if(mark>=60 && mark<70) {
  console.log('D');
}
else if(mark>=50 && mark<60) {
  console.log('E');
}
else {
  console.log('Enter valid data');
}
}
//output : 'B'