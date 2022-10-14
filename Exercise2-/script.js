const age = document.getElementById('ageInput')


function calculaIdade(){
  if(age.valueAsNumber<= 15){
    alert("You are a Youngster");
  }
  else if(age.valueAsNumber>15 && age.value<=64 ){
    alert("You are an adult ");
  }
  else if(age.valueAsNumber>64){
    alert("You are an elder ");
  }
}