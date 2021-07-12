c3 = 0
c5 = 0
for(i=1; i<=100; i++){
  a = ""
  c3++
  c5++
  if(c3==3){
    a = a+"Fizz"
    c3 = 0
  }
  if(c5==5){
    a = a+"Buzz"
    c5 = 0
  }
  if(a == ""){
    console.log(i)
  }
  else{
    console.log(a)
  }
}
