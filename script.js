let calBtn = Array.from(document.getElementsByTagName("button"));
let screen = document.getElementById("data");
let toglebtn = document.getElementById("switch");
let body = document.querySelector('body');
let card = document.querySelector('card')


calBtn.map((calBtn) => {
  calBtn.addEventListener("click", () => {
    switch (calBtn.innerText) {
      case "clr":
        screen.innerText = "";
        break;
      case "→":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case "=":
        if (screen.innerText != "") {
          try {
            screen.innerText = eval(screen.innerText);
          } catch {
            screen.innerText = "Error!";
          }
        } else {
          screen.innerText = "No Numbers Entierd";
        }
        break;
        case "√":
            if (screen.innerText != ""){
                screen.innerText = Math.sqrt(screen.innerText);
            }else{
                screen.innerText = "enter number first!";
            }
        
        break;

      default:
        screen.innerText += calBtn.innerText;
    }
  });
});
toglebtn.onclick = function() {
  body.classList.toggle('dark')
  
}
