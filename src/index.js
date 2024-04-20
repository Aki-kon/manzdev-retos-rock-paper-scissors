const Game = (element) => {
  const CPU = new Array("rock", "paper", "scissors");
  let rand = Math.floor(Math.random() * 3);
  let cpu_election = CPU[rand];
  let x = document.getElementById(element.id);
  let human_election = x.classList[0];
  let varImg;
  switch (human_election) {
    case "rock":
      if (cpu_election == "paper") {
        varImg = "./assets/paper-crane-svgrepo-com.svg";
        $("#message").html(
          `You lost your choisee was:  ${human_election} and the machine got: ${cpu_election} `
        );
        $("#element-5").attr("src", varImg);
      } else if (cpu_election == "rock") {
        varImg = "./assets/rock-golem-svgrepo-com.svg";
        $("#message").html(
          `its a draw your choisee was:  ${human_election} and the machine got: ${cpu_election}`
        );
        $("#element-5").attr("src", varImg);
      } else {
        varImg = "./assets/scissors-5-svgrepo-com.svg";
        $("#message").html(
          `you win your choisee was:  ${human_election} and the machine got: ${cpu_election}`
        );
        $("#element-5").attr("src", varImg);
      }
      break;
    case "scissors":
      if (cpu_election == "rock") {
        varImg = "./assets/rock-golem-svgrepo-com.svg";
        $("#message").html(
          `You lost your choisee was:  ${human_election} and the machine got: ${cpu_election} `
        );
        $("#element-5").attr("src", varImg);
      } else if (cpu_election == "scissors") {
        varImg = "./assets/scissors-5-svgrepo-com.svg";
        $("#message").html(
          `its a draw your choisee was:  ${human_election} and the machine got: ${cpu_election}`
        );
        $("#element-5").attr("src", varImg);
      } else {
        varImg = "./assets/paper-crane-svgrepo-com.svg";
        $("#message").html(
          `you win your choisee was:  ${human_election} and the machine got: ${cpu_election}`
        );
        $("#element-5").attr("src", varImg);
      }
      break;
    case "paper":
      if (cpu_election == "scissors") {
        varImg = "./assets/scissors-5-svgrepo-com.svg";
        $("#message").html(
          `You lost your choisee was:  ${human_election} and the machine got: ${cpu_election} `
        );
        $("#element-5").attr("src", varImg);
      } else if (cpu_election == "paper") {
        $("#message").html(
          `its a draw your choisee was:  ${human_election} and the machine got: ${cpu_election}`
        );
        varImg = "./assets/paper-crane-svgrepo-com.svg";
        $("#element-5").attr("src", varImg);
      } else {
        varImg = "./assets/rock-golem-svgrepo-com.svg";
        $("#message").html(
          `you win your choisee was:  ${human_election} and the machine got: ${cpu_election}`
        );
        $("#element-5").attr("src", varImg);
      }
      break;
  }
};
function Restart() {
  varImg = "./assets/skull-svgrepo-com.svg";
  $("#message").html("");
  $("#element-5").attr("src", varImg);
}
/*
type = 'module' only works on servers 

getELement knows if it's a class or id without you have to write explicit what is

when you use this an you get the element you can access to the property id of that element an use it

Math.random()* the nummber or range you want from 0 to n || USE Math.floor to avoid numbers with decimals 

switch case with if else it's possible an a very good option. 
*/
