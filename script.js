const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        console.log("You clicked me!!", button.id);
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};
