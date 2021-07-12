a = "madam is walking with dad and sis"
a = a + " "
word = ""
revword = ""
for(f of a){
  if(f != " "){
    word=word+f
    revword = f + revword
  }
  else{
    
    
    if (word == revword){
      console.log(word)
    }
    word = ""
    revword = ""
  }
}