// question no. 1

// const userName = prompt("Enter Your Name")
// function code(userName){
//     alert("Welcome     " + userName)
// }
// code(userName)

//  question no. 2

function generateQuote() {
    const quotes = [
        "The quality of your thinking determines the quality of your life",
        "Confuse them with your silence. Shock them with your actions",
        "Failure is a part of life If you don't fail, you don't learn, If you don't learn, you'll never change",
        "Stand up for what is right even if you stand alone ",
        "change the plan But never the goal",
        "Silence is better than unnecessary drama.",
        "Keep doing your best every day, and if no one is proud of you, be proud of yourself."
    ];

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// question no. 3
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}