class Collapsible {

  constructor(element) {
  // Takes an element as its argument  It sets the element property to the provided element, 
  // and sets the content property to the next sibling element of the element. 
    
    this.element = element;
    this.content = element.nextElementSibling;
    this.element.addEventListener("click", () => {
      this.toggle();
    });
  }
  // It then adds a click event listener to the element that calls the toggle
  toggle() {
    this.element.classList.toggle("active");

    if (this.content.style.maxHeight) {
      this.content.style.maxHeight = null;
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + "px";
    }
  }
}

class ChatBot {
  constructor() {
    this.chatBox = document.getElementById("chatbox");
    this.inputBox = document.getElementById("textInput");
    this.chatBar = document.getElementById("chat-bar-bottom");
    this.chatBar.scrollIntoView(true);
    this.firstBotMessage();
  }

  getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
  }

  firstBotMessage() {
    let firstMessage = "Hi, my name is TocToc. I'm Charlyne's asistant.";
    document.getElementById("botStarterMessage").innerHTML ='<p class="botText"><span>' + firstMessage + "</span></p>";
    
    let time = this.getTime();


  $("#chat-timestamp").append(time);
    this.inputBox.scrollIntoView(false);
  }

  getHardResponse(userText) {
    let botResponse = this.getBotResponse(userText);
    let p = document.createElement("p");
    let span = document.createElement("span");
    span.innerHTML = botResponse;
    p.classList.add("botText");
    p.appendChild(span);
    this.chatBox.append(p);

    this.chatBar.scrollIntoView(true);
  }

  getResponse() {
    let userText = this.inputBox.value;

    if (userText == "") {
      userText = "I love coding!";
    }

    let p = document.createElement("p");
    let span = document.createElement("span");
    span.innerHTML = userText;
    p.classList.add("userText");
    p.appendChild(span);

    this.inputBox.value = "";
    this.chatBox.append(p);
    this.chatBar.scrollIntoView(true);
    
    setTimeout(() => {
      this.getHardResponse(userText);
    }, 1000);
  }

  buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

    this.inputBox.value = "";
    this.chatBox.append(userHtml);
    this.chatBar.scrollIntoView(true);
  }

  sendButton() {
    this.getResponse();
  }

  getBotResponse(input) {
    input = input.toLowerCase();
    //rock paper scissors
    if (input == "rock") {
      return "paper";
  } else if (input == "paper") {
      return "scissors";
  } else if (input == "scissors") {
      return "rock";
  }

    // Simple responses
    if (
      input == "hello" ||
      input == "hi" ||
      input == "hey" ||
      input == "hola"
    ) {
      return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
      return "Talk to you later!";  
    } else if (input == "github" || input == "git hub") {
      return '<a href="https://github.com/ChanaFerrari514">Git Hub</a>';
    }
    else if (input == "portfolio" || input == "show me her work") {
      return '<a href="file:///Users/chanaferrari/Desktop/Portfolio%20Charlyne/chachi/portfolio.html">Portfolio</a>';
    }
    else {
      return "Try asking something else!";
    }
  }
}

let chatBot = new ChatBot();
let collapsible = new Collapsible(document.querySelector(".collapsible"));

document
  .getElementsByClassName("chat-bar-icon")[0]
  .addEventListener("click", () => {
    chatBot.sendButton(document.getElementById("textInput").value);
  });
// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
      chatBot.getResponse();
  }
});  