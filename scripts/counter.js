let months_ = document.getElementById('months')
let days_ = document.getElementById('days')
let hours_ = document.getElementById('hours')
let minutes_ = document.getElementById('minutes')
let seconds_ = document.getElementById('seconds')


// calculate future time
const summer_end = "August 28 2023";
const future = new Date(summer_end);

// loop and update page subtracting current time from future time
const interval = setInterval( function() {

    // save current time
    const curr = new Date();

    //Get the Timestamp
    const date1_time_stamp = curr.getTime();
    const date2_time_stamp = future.getTime();

    
    //Check which timestamp is greater
    let calc = new Date(date2_time_stamp - date1_time_stamp);

    months_.firstElementChild.innerHTML = calc.getMonth()
    days_.firstElementChild.innerHTML = calc.getDate()
    hours_.firstElementChild.innerHTML = calc.getHours()
    minutes_.firstElementChild.innerHTML = calc.getMinutes()
    seconds_.firstElementChild.innerHTML = calc.getSeconds()

    
}, 1000);
 


