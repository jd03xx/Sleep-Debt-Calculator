function getSleepHours(day){
    //Enter number of actual hours you slept for each day
    switch (day) {
      case "monday":
        return 1; //hours of sleep
      case "tuesday":
        return 2; //hours of sleep
      case "wednesday":
        return 3; //hours of sleep
      case "thursday":
        return 4; //hours of sleep
      case "friday":
        return 5; //hours of sleep
      case "saturday":
        return 6; //hours of sleep
      case "sunday":
        return 7; //hours of sleep
    };
};

//Calcualtes the total number of hours of sleep you got for the week
function getActualSleepHours(){
    const monday = getSleepHours('monday');
    const tuesday = getSleepHours("tuesday");
    const wednesday = getSleepHours("wednesday");
    const thursday = getSleepHours("thursday");
    const friday = getSleepHours("friday");
    const saturday = getSleepHours("saturday");
    const sunday = getSleepHours("sunday");

    const totalSleepHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
    return totalSleepHours;
};

function getIdealSleepHours(){
    // ideal number of sleep hours each night
    const idealHours = 8;
    // total ideal hours for a week
    return idealHours * 7
};

//Calculates your sleep debt if any
function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours =  getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log('You reached your sleep hours goal!');
    } else if (actualSleepHours < idealSleepHours){
        let hours = idealSleepHours - actualSleepHours;
        console.log(`You missed your goal by ${hours} hours...You need more sleep`);
    } else {
        console.log('You exceeded your sleep hours goal!');
    };
};

calculateSleepDebt();