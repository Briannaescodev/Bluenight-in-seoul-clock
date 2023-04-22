const getCurrentTime = () => {
// Get New Date
const today = new Date();

//Convert
let day = today.getDay();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let milisecond = today.getMilliseconds();

//Day Array
const dayArray = [
    "Sun", "Mon", "Tues", "Wed", "Thr", "Fri", "Sat"
];

//Assemble
let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${milisecond}`;

//Check Leading Zero 
hour = checkleadingZero(hour);
minute = checkleadingZero(minute);
second = checkleadingZero(second);

//Render
document.querySelector(".clock").innerHTML = currentTime;

setTimeout(getCurrentTime, 100)

}

const checkleadingZero = (paramTime) => {
    paramTime < 10
    ?paramTime = `0${paramTime}`
    : null

    return paramTime; 
}
