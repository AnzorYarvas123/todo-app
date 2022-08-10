let Ask_Name = prompt("Whats your Name?");

let Ask_About_Gender = prompt("Enter your Gender: male or female? ");

let Ask_About_Age = prompt("Enter your Age?");

window.confirm ("Want to show a welcome message");

let x= Ask_About_Gender ;




    if(x =='male' || x=='Male')
    window.alert('Hello in my site ' + "Mr."+ (Ask_Name));
    
else if(x == 'female' || x == 'Female')
    window.alert('Hello in my site ' + "Mrs."+(Ask_Name));


else
    window.alert('Hello in my site ' +(Ask_Name));
