const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const todayDate = new Date();


// verification de coherance 
function verification() {
    if (year.value == ""|| month.value == "" || day.value == "" || year.value > todayDate.getFullYear()) {
        return false;
    } else { 

        console.log("zz")
        if (month.value == 2 && day.value<= 29) {
            calcule()
        }
        if ( [1,3,5,7,8,10,12].includes(parseInt(month.value)) && day.value <= 31){
            calcule()
        }
        if ( [4,6,9,11].includes(month.value) && day.value<= 30){
            calcule
            
        }
    }
}

// on calcule le nombre d'annee mois et jour qui nous separe de cette date 
function calcule() {
    document.querySelector(".annee").innerHTML =todayDate.getFullYear() - year.value;
    if (month.value > todayDate.getMonth() + 1) {
        document.querySelector(".annee").innerHTML -= "1"
        document.querySelector(".mois").innerHTML = 13 +(todayDate.getMonth() - month.value  )
    }else{
        document.querySelector(".mois").innerHTML =  (todayDate.getMonth() + 1) - month.value 
    }
    if(day.value > todayDate.getDate()){
        document.querySelector(".mois").innerHTML -= "1"
        document.querySelector(".jour").innerHTML = 31 + (todayDate.getDate() - day.value);
    }else{
        document.querySelector(".jour").innerHTML = todayDate.getDate() - day.value
    }
}



document.querySelector("input[type='submit']").addEventListener("click" , ()=>{
    calcule()
        
});

