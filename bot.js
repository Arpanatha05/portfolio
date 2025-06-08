function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  showTypingLoader();
  input.value = "";

  setTimeout(() => {
    removeTypingLoader();
    respondToUser(message.toLowerCase());
  }, 1000);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.innerText = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendImage(sender, imgSrc) {
  const chatBox = document.getElementById("chat-box");
  const imgDiv = document.createElement("div");
  imgDiv.className = `message ${sender}`;
  imgDiv.innerHTML = `<img src="${imgSrc}" class="chat-image" alt="Creator Picture" />`;
  chatBox.appendChild(imgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingLoader() {
  const chatBox = document.getElementById("chat-box");
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "message bot";
  loaderDiv.id = "typing-loader";
  loaderDiv.innerHTML = `
    <div class="loader">
      <span></span><span></span><span></span>
    </div>
  `;
  chatBox.appendChild(loaderDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingLoader() {
  const loader = document.getElementById("typing-loader");
  if (loader) loader.remove();
}

function respondToUser(msg) {
  let response = "";
  let showImage = false;

  if (msg.includes("name")) {
    response = "My name is Arpan Atha.";
  } else if(msg.includes("Hi") ||msg.includes("hi") ||msg.includes("hello")){
    response = "Hello ! How can i help you ?";
  }else if (msg.includes("education")) {
    response = "I study B-Tech in Information Technology";
  } else if (msg.includes("skills")) {
    response = "My key skills include HTML, CSS, JavaScript, c language, c++ language, and UI/UX design.";
  } else if (msg.includes("hobbies") ||msg.includes("hobby") ) {
    response = "I love photography, gaming, coding, and watching Detective movies.";
  } else if (msg.includes("goal") || msg.includes("dream")) {
    response = "My dream is to become a full-stack developer and build impactful software.";
  } else if (msg.includes("family")) {
    response = "I come from a family of Three, with amazing parents.";
  } else if (msg.includes("project")) {
    response = "I've worked on a portfolio site, an medicine reminder app, and now this chatbot!";
  } else if (msg.includes("age")) {
    response = "I'm 20 years old.";
  } else if (msg.includes("current location")) {
    response = "I'm currently based in Sector-V kolkata, West Bengal.";
  } else if (msg.includes("home location")) {
    response = "My actual location is Bankura ,West Bengal";
  }else if (msg.includes("girlfriend")) {
    response = "No i am single now";
  }else if (msg.includes("college")) {
    response = "My College Name is Techno Main Salt Lake";
  }else if (msg.includes("school")) {
    response = "I am pass Out From Bankura Banga Vidyalaya";
  }else if (msg.includes("madhymik marks")||msg.includes("madhymik percent")) {
    response = " I got 93% marks in madhyamik";
  }else if (msg.includes("hs marks")||msg.includes("hs percentage")) {
    response = "I got 89% marks in HS";
  }else if (msg.includes("food")) {
    response = "My favourite Food is Chiken Kosha";
  }else if (msg.includes("color")) {
    response = "My favourite color is Red";
  }else if (msg.includes("singer")) {
    response = "My favourite singer is Arijit singh";
  }else if (msg.includes("actor")) {
    response = "My favourite Actor is Akshay kumar";
  }else if (msg.includes("creator")|| msg.includes("creats")) {
    response = "Arpan Atha Creats me";
  }else if (msg.includes("who are you")) {
    response = "I am a personal chatbot .I can gives you presonal information of my which is in my database";
  }else if (msg.includes("youtuber")) {
    response = "My favourite youtuber is Asish Chanchalani";
  }else if (msg.includes("actress")) {
    response = "My favourite Actress is Shradha Kapoor";
  }else if (msg.includes("what's up")) {
    response = "I am fine .How are you??";
  }else if (msg.includes("fine")||msg.includes("ok")) {
    response = "That's Great";
  }else if (msg.includes("inspiration")) {
    response = "My father is my inspiration";
  }else if (msg.includes("birth")||msg.includes("born")) {
    response = "My birthdate is 16 nov 2005";
  }else if (msg.includes("arpan")) {
    response = "My name is Arpan Atha";
  }else if (msg.includes("religion")) {
    response = "I am a Pure Hindu Boy";
  }else if (msg.includes("about")) {
    response = "I am a Personal Chatbot";
  }
  else if (msg.includes("subject")) {
    response = "My favourite subject is Mathematics";
  }
  else if (msg.includes("car")) {
    response = "My favourite car is G-Wagon,Fortuner,Thar";
  }

  else if (msg.includes("picture") || msg.includes("photo") || msg.includes("image")) {
    response = "Here is my picture:";
    showImage = true;
  } else {
    response = "Sorry, I don't have an answer for that. Ask about my education, skills, hobbies, or goals etc...";
  }
  

  appendMessage("bot", response);

  if (showImage) {
    appendImage("bot", "arpan.jpg"); 
  }
}
//back arrow
document.querySelector(".back-arrow").addEventListener("click", function () {
  window.location.href = "index.html"; 
});

