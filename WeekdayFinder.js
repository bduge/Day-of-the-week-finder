var date;
var year;
var month;
var day;

function main(){
    getDate()
}

function getDate(){
   date = document.getElementById("datePicker").value
   getYear()
   getMonth()
   getDay()
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


