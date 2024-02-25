const displayTime = () => {
    const time = new Date();
    console.clear(); // Clears the console to create a static effect
    console.log(time.toLocaleTimeString()); // Displays the current time
};

setInterval(displayTime, 1000); // Updates the time every second
