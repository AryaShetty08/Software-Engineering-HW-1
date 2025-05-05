//this is to create a way for users to input the date they want to display
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//this function uses the readline const created earlier
//and asks the user for input 
function askDate() {
    readline.question('Enter date: ', inputArg => {
        dateConvert(inputArg);
    })
}

//this is the main function that takes the inputArg parameter which is the date the user inputs
//and then converts it into a date string 
function dateConvert(inputArg) {
    
    readline.resume();                                          //this is just in case readline stops when rerunning the function
    if(inputArg == "stop") {                                    //used to exit the function
        readline.close();
    }
    else if(inputArg.length > 15) {                             //to make sure the date is valid length
        console.log("Invalid Date");
        askDate();
        return "Invalid Date";
    }   
    else {                                                      //when all condiitons met this part slices the inputArg to create a date object in JS
        const correctYear = inputArg.slice(0,4);
        const correctMonth = inputArg.slice(4,6) - 1;
        const correctDay = inputArg.slice(6,8);
        const correctHour = inputArg.slice(9,11);
        const correctMinute = inputArg.slice(11,13);

        let newInputArg = inputArg.slice(0,4) + '-' + inputArg.slice(4,6) + "-" + inputArg.slice(6,11) + ":" + inputArg.slice(11,13) + ":" +  inputArg.slice(13,15);
        //console.log(newInputArg);
        outputDate = new Date(newInputArg);

        const correctFormat = {year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric', hour12:true};
        const dateTimeFormat = new Intl.DateTimeFormat('en-US', correctFormat);
        //console.log(outputDate.getMinutes() + " " + correctMinute);
        if(outputDate.getFullYear() == correctYear && correctYear != 0 && outputDate.getMonth() == correctMonth && outputDate.getDate() == correctDay && outputDate.getHours() == correctHour && outputDate.getMinutes() == correctMinute) {
            console.log(dateTimeFormat.format(outputDate));
            askDate();
            return dateTimeFormat.format(outputDate);
        }
        else {
            console.log("Invalid Date");
            askDate();
            return "Invalid Date";
            //isInvalid = true;
        }
    }

}

//This is used to call the first function once, which will then loop based on the conditions met
askDate();

//used to export the fucntion for jasmine testing
module.exports = { dateConvert };

//19980118T230000
//19980230T230000
//20240230T230000
//January 18, 1998, at 11 PM

