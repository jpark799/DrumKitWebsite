const numberOfDrumButtons = document.querySelectorAll(".drum").length

for (let i = 0 i < numberOfDrumButtons i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}

function handleClick() {
  let buttonInnerHTML = this.innerHTML

  switch (buttonInnerHTML) {
    case "w":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play()
        break

    case "a":
            let kickBass = new Audio("./sounds/kick-bass.mp3")
            kickBass.play()
        break

    case "s":
            let audio = new Audio("./sounds/snare.mp3")
            audio.play()
        break

    case "d":
            let audio = new Audio("./sounds/tom1.mp3")
            audio.play()
        break

    case "j":
            let audio = new Audio("./sounds/tom2.mp3")
            audio.play()
        break

    case "k":
            let audio = new Audio("./sounds/tom3.mp3")
            audio.play()
        break

    case "l":
            let audio = new Audio("./sounds/tom4.mp3")
            audio.play()
        break

    default:
      break
  }
}
