function compute()
{
    //Acquiring required inputs from user
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //Checking if principal is a positive value
    if(principal>0)
    {
        //Calculating information needed to display
        var interest = principal*years*(rate/100);
        var currentYear = new Date().getFullYear();
        var endYear = currentYear+new Number(years);

        //Displaying info
        document.getElementById("result").innerHTML=
        'If you deposit '+principal+', at an interest rate of '+rate+'%. You will receive an amount of '+interest+', in the year '+endYear;
    }
    else
    {
        //Displaying error message
        alert("Please enter a positive number for principal amount");
        document.getElementById("principal").focus();
        return false; 
    }
}
        
function displayslider() {
    //Acquiring and diplaying slider value
    document.getElementById("rate_display").innerHTML = document.getElementById("rate").value+'%';
}