document.getElementById("getDayButton").addEventListener("click", function() {
    var currentDate = new Date();
    
    var dayNumber = currentDate.getDay();

    var dayName;

    switch (dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }

    document.getElementById("output").textContent = dayName;
});


document.getElementById("getDayCountButton").addEventListener("click", function() {

    var selectedMonth = parseInt(document.getElementById("monthSelect").value);

    var dayCount;

    switch (selectedMonth) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            dayCount = 31;
            break;
        case 4: case 6: case 9: case 11:
            dayCount = 30;
            break;
        case 2:
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            
            if ((currentYear % 4 == 0 && currentYear % 100 != 0) || currentYear % 400 == 0) {
                dayCount = 29;//leap
            } else {
                dayCount = 28;
            }
            break;
        default:
            dayCount = -1; 
    }

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var selectedMonthName = monthNames[selectedMonth - 1];

    document.getElementById("output").textContent = selectedMonthName + ", " + dayCount;
});



