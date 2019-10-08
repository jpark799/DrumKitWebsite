const numberOfDrumButtons = document.querySelectorAll(".drum").length
const audio = new Audio('./sounds/kick-bass.mp3')

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        let buttonInnerHTML = this.innerHTML

        switch (buttonInnerHTML) {
            case 'w':
                alert('w was just clicked')          
                break;
        
            default:
                break;
        }
    })
}

//     function handleClick() {
//         audio.play();
//     }
// }