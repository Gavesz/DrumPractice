/**Kattintást érzékeli */

var buttons = document.querySelectorAll(".drum");

buttons.forEach(element => {
    element.addEventListener("click", function(){
        
        var thisButtonInnerHTML= this.innerHTML;

        makeASound(thisButtonInnerHTML);
        buttonAnimation(thisButtonInnerHTML);
    })    
});

/**Gombnyomást érzékeli */

document.addEventListener("keypress", function (param) {
    makeASound(param.key);
    buttonAnimation(param.key);
  });




/*A hangot beállító függvény*/
function makeASound(key){

    var audio;

    switch (key) {
        case 'w':
            audio= new Audio('sounds/tom-1.mp3')
            break;
        case 'a':
            audio= new Audio('sounds/tom-2.mp3')
            break;
        case 's':
            audio= new Audio('sounds/tom-3.mp3')
            break;
        case 'd':
            audio= new Audio('sounds/tom-4.mp3')
            break;
        case 'j':
            audio= new Audio('sounds/crash.mp3')
            break;
        case 'k':
            audio= new Audio('sounds/kick-bass.mp3')
            break;
        case 'l':
            audio= new Audio('sounds/snare.mp3')
            break;

        default:

        console.log("defaultra futott")
            break;

            
    }
    audio.play();
} 

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.toggle("pressed");
    setTimeout(function(){ activeButton.classList.toggle("pressed");}, 100);

}