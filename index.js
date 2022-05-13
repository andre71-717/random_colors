let myButtonAdder = document.getElementById("myButtonAdder")
let myButtonStopper = document.getElementById("myButtonStopper")
let placeToFillDivs = document.getElementsByClassName("placeToFillDivs")[0]

myButtonAdder.addEventListener('click', function(){
    let createDiv = document.createElement('div')
    createDiv.classList.add("myDivResult")
    placeToFillDivs.appendChild(createDiv)
    createDiv.animate(
        { transform: 'translateY(0)'}, 
        {
          duration: 800,
          fill: 'forwards'
        })
    createDiv.style.marginTop = "150px"
    createDiv.style.flexBasis = "20%"
    createDiv.style.width = "50px"
    createDiv.style.height = "250px"



    let intervalOfColors = setInterval(()=>{
        let symbols = "0123456789ABCDEF"
        let color = "#";

        for (let i = 0; i < 6; i++){
            color += symbols[Math.floor(Math.random()* 16)]
            
        createDiv.style.background = color

        }
        
    },2000)
    
    
        
    myButtonStopper.addEventListener('click', function(){
        clearInterval(intervalOfColors)
        createDiv.style.background = "green"
    })
    
})