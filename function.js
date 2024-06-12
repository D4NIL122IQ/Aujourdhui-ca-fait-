const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const todayDate = new Date();


// verification de coherance 
function verification() {
    if (year.value == ""|| month.value == "" || day.value == "" || year.value > todayDate.getFullYear()) {
        document.querySelector(".result").innerHTML = "Champs vide Ou année sup a l'année actuelle"
    } else { 
        if( (year.value == todayDate.getFullYear() && month.value > todayDate.getMonth() +1 ) 
            || (year.value == todayDate.getFullYear() && ( month.value == todayDate.getMonth() +1 )&& day.value > todayDate.getDate()) ){
                document.querySelector(".result").innerHTML = "Date sup a la date actuelle"
        }else{
            if ( (month.value == 2 && day.value<= 29) 
                || ( [1,3,5,7,8,10,12].includes(parseInt(month.value)) && day.value <= 31) 
                || ( [4,6,9,11].includes(parseInt(month.value)) && day.value<= 30)) {
                   calcule()
            }else{
                document.querySelector(".result").innerHTML = "coeherence incorrecte"
            }
        }   
    }
}

// on calcule le nombre d'annee, mois et jour qui nous separe de cette date 
function calcule() {
    document.querySelector(".annee").innerHTML = todayDate.getFullYear() - year.value;

    if (month.value > todayDate.getMonth() + 1) {
        document.querySelector(".annee").innerHTML -= "1"
        document.querySelector(".mois").innerHTML = 13 +(todayDate.getMonth() - month.value  )
    }else{
        document.querySelector(".mois").innerHTML =  (todayDate.getMonth() + 1) - month.value 
    }
    if(day.value > todayDate.getDate()){
        if(parseInt(document.querySelector(".mois").innerHTML) != 0 ){
            document.querySelector(".mois").innerHTML = parseInt(document.querySelector(".mois").innerHTML) - 1
        }else{
            document.querySelector(".annee").innerHTML -= "1"
            document.querySelector(".mois").innerHTML = 12
        }
        document.querySelector(".jour").innerHTML = 30 + (todayDate.getDate() - day.value);
    }else{
        document.querySelector(".jour").innerHTML = todayDate.getDate() - day.value
    }
}



document.querySelector("input[type='submit']").addEventListener("click" , verification);