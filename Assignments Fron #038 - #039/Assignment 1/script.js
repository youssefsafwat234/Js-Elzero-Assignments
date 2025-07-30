let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim();
let arr = day.split("");
arr[0] = arr[0].toUpperCase();
day = arr.join("");
console.log(day);

day = "Friday";
day = "Saturday";
day = "Sunday";
// Output => "No Appointments Available"
day = "Monday";
day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

day = "World";
// Output => "Its Not A Valid Day"


switch (day) {
    case "Friday" || "Saturday" || "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday" || "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}