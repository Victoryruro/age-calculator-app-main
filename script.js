let day =document.getElementById("day");
let month =document.getElementById("month");
let year =document.getElementById("year");
let button =document.querySelector("button");
let years =document.getElementById("years");
let months =document.getElementById("months");
let days =document.getElementById("days");
let dayError = document.getElementById("dayError");
let monthError = document.getElementById("monthError");
let yearError = document.getElementById("yearError");
let inputFields = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");

day.addEventListener("input", () => {
    if(day.value !== ""){
        dayError.textContent = ""
        labels[0].style.color = "unset";
        inputFields[0].style.borderColor = "hsl(259, 100%, 65%)";

    }

});
month.addEventListener("input", () => {
    if(month.value !== ""){
        monthError.textContent = ""
        labels[1].style.color = "unset";
        inputFields[1].style.borderColor = "hsl(259, 100%, 65%)";

    }
});
year.addEventListener("input", () => {
    if(year.value !== ""){
        yearError.textContent = ""
        labels[2].style.color = "unset";
        inputFields[2].style.borderColor = "hsl(259, 100%, 65%)";

    }
});


let calculateAge = () => {

    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";


    if (day.value === "" || month.value === "" || year.value === "") {
        if (day.value === "") dayError.textContent = "This field is required";
        if (month.value === "") monthError.textContent = "This field is required";
        if (year.value === "") yearError.textContent = "This field is required";
        inputFields.forEach(input => input.style.borderColor = "red");
        labels.forEach(label => label.style.color = "red");;
        return null;
    } 
    else if (day.value > 31 || day.value < 1) {
        dayError.textContent = "Please enter a valid day";
        inputFields[0].style.borderColor = "red";
        labels[0].style.color = "red";
        return null;
    } 
    else if (month.value > 12 || month.value < 1) {
        monthError.textContent = "Please enter a valid month";
        inputFields[1].style.borderColor = "red";
        labels[1].style.color = "red";
        return null;
    } 
    else if ((month.value == 2) && (day.value > 29)) {
        dayError.textContent = "must be a valid date  ";
        inputFields[0].style.borderColor = "red";
        labels[0].style.color = "red";
        return null;
    }   
    else if (([4, 6, 9, 11].includes(parseInt(month.value))) && (day.value > 30)) {
        dayError.textContent = "must be a valid date  ";
        inputFields[0].style.borderColor = "red";
        labels[0].style.color = "red";
        return null;
    }
    else if (year.value > new Date().getFullYear() || year.value < 1000) {
        yearError.textContent = "Please enter a valid year";
        inputFields[2].style.borderColor = "red";
        labels[2].style.color = "red";
        return null;
    } 
    
    else{
        let dobInput = year.value + "-" + month.value + "-" + day.value;
        let dob = new Date(dobInput);
        let today =new Date();
        let yearDiff = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        let dayDiff = today.getDate() - dob.getDate();

        if(dayDiff < 0){
            monthDiff--;
            dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            
            
        }
        if(monthDiff < 0){
            yearDiff--;
            monthDiff += 12;
        }
        return{ yearDiff, monthDiff, dayDiff};

    };

}
button.addEventListener("click", function(){
    // calculateAge();
    let age = calculateAge();

    if (age) {   
        years.innerHTML = `<span style="color:hsl(259, 100%, 65%)">${age.yearDiff}</span> years`;
        months.innerHTML = `<span style="color:hsl(259, 100%, 65%)">${age.monthDiff}</span> months`;
        days.innerHTML = `<span style="color:hsl(259, 100%, 65%)">${age.dayDiff}</span> days`;
   }
 
})