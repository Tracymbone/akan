//validation function
function wrong(day, month) {
    if (day < 1 || day > 31 || month == 2 && day > 29) {
        alert("Please enter correct date");
        day.focus();
        return false;
    } else if (month < 1 || month > 12) {
        alert("Please enter correct month");
        month.focus();
        return false;
    } else {
        return true;
    }
}

// function to get and alert the Akan name depending on the user inputs
function NameAkan() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="Gender"]:checked').value;

    if (wrong(day, month)) {
        var dayIndex = new Date(year, month - 1, day).getDay();

        alert("Akan name is: " + getNameAkan(dayIndex, gender));
    }
}

function getNameAkan(dayIndex, gender) {
    var boys = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girls = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    return gender === "Male" ? boys[dayIndex] : girls[dayIndex];
}

/* var CC, YY, MM, DD, d, dayValue;

 function calculateDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.round(d));
} */