function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*(rate/100);
    var currentYear = new Date().getFullYear();
    var endYear = currentYear+new Number(years);    
    document.getElementById("result").innerHTML=
    'If you deposit '+principal+', at an interest rate of '+rate+'%. You will receive an amount of '+interest+',in the year '+endYear;
}
        
function displayslider() {
    document.getElementById("rate_display").innerHTML = document.getElementById("rate").value+'%';
}