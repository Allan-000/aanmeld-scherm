const nameInput=document.querySelector(".name-input");
const birthInput=document.querySelector(".birth-input")
const genderInput=document.querySelector(".gender-input");
const registerButton=document.querySelector(".btn-add");
const checkButton=document.querySelector(".btn-check");
const valueToCheck=document.querySelector(".value-to-check");
const doesExist=document.querySelector(".does-exist");
//creatin array to hold the data
const employees=[];
registerButton.addEventListener("click",()=>{
    if(nameInput.value==""||birthInput.value==""||genderInput.value==""){
        alert("voer alle velden in aub:")
    }
    else{
        const obj={};
        obj["name"]=nameInput.value;
        obj["birth"]=birthInput.value;
        if(genderInput.value.toLowerCase()=="man"||genderInput.value.toLowerCase()=="vrouw"||genderInput.value.toLowerCase()=="anders"){
            obj["gender"]= genderInput.value.toLowerCase();
        }
        else{
            alert("selecteer geslacht tussen/man,vrouw of anders...")
        }
        employees.splice(0, 0,obj);
        console.log(employees)
    }
    
})
checkButton.addEventListener("click",()=>{
    for(let i = 0; i<employees.length;i++){
        const result=employees[i].name.includes(valueToCheck.value);
        if(result){
            doesExist.textContent=("bestaat wel");
            doesExist.style.color='green'
        }
        else{
            doesExist.textContent=("bestaat niet");
            doesExist.style.color='red'
        }
    }
    
})