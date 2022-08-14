let Ask_Name = prompt("Whats your Name?");

let Ask_About_Gender = prompt("Enter your Gender: male or female? ");

let Ask_About_Age = prompt("Enter your Age?");


let Ask_Three_Quastion = [];
let answer_Three_Quastion = [];

 Ask_Three_Quastion[1] = prompt("Do you like mansaf?");

 Ask_Three_Quastion[2] = prompt("You like to do sports?");

 Ask_Three_Quastion[3] = prompt("Do you like to read book?");



for (let i = 1; i < 4; i++) {
    switch (Ask_Three_Quastion[i]) {
        case "yes":
        case "y":
        case "Yes":
        case "Y":
            answer_Three_Quastion.push("yes");
            break;
        case "no":
        case "n":
        case "No":
        case "N":
            answer_Three_Quastion.push("no");
            break;
        default:
            answer_Three_Quastion.push("Invalid")
    }
}

let stars = prompt("How many stars do you rate my website(0-5)?")

if(stars >=5){
   alert ("you rated 5. Thank you for your rated");
}
else if(stars == 4){
    alert ("you rated 4. Thank you for your rated");
}
else if(stars == 3){
    alert ("you rated 3. Thank you for your rated");
}
else if(stars == 2){
    alert ("you rated 2. Thank you for your rated");
}
else if(stars == 1){
    alert ("you rated 1. Thank you for your rated");
}
else{
    alert ("you rated 0. Thank you for your rated");
}



window.confirm ("Want to show a welcome message");

let x= Ask_About_Gender ;

    if(x =='male' || x=='Male')
    window.alert('Hello in my site ' + "Mr."+ (Ask_Name));
    
else if(x == 'female' || x == 'Female')
    window.alert('Hello in my site ' + "Mrs."+(Ask_Name));


else
    window.alert('Hello in my site ' +(Ask_Name));


    console.log(answer_Three_Quastion[1]);
    console.log(answer_Three_Quastion[2]);
    console.log(answer_Three_Quastion[3]);




