var date;
var year;
var month;
var day;
var calcYear;
var calcMonth;
var calcCentury;

function main(){
    getDate()
    console.log(calcCentury)
}

function getDate(){
   date = document.getElementById("datePicker").value
   getYear()
   getMonth()
   getDay()
   getCalcMonth()
   getCalcYear()
   getCalcCentury()
}

function getYear(){
    yearString = date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3)  
    year = parseInt(yearString)
}

function getMonth(){
    monthString = date.charAt(5)+date.charAt(6)
    month = parseInt(monthString)
}

function getDay(){
    dayString = date.charAt(8)+date.charAt(9)
    day = parseInt(dayString)
}

function getCalcMonth(){
    if(month==1){
        calcMonth = 11
    }
    else if(month==2){
        calcMonth = 12
    }
    else{
        calcMonth = month-2
    }
}

function getCalcYear(){
    calcYear = year % 100
    if(month==1 || month==2){
        calcYear -= 1
    }
}

function getCalcCentury(){
    if(month==1 || month==2){
        calcCentury = Math.floor((year-1) / 100)
    }
    else{
        calcCentury = Math.floor(year / 100)
    }
}




