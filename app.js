const btnPlayer1 = document.querySelector(".player1")
const btnPlayer2 = document.querySelector(".player2")
const btnReset = document.querySelector(".reset")
const scoreToTwin = document.getElementById("score")
const leftScore = document.querySelector(".score-player1")
const rightScore  = document.querySelector(".score-player2")
const leftWin = document.querySelector(".leftwin")
const rightWin = document.querySelector(".rightwin")


btnPlayer1.addEventListener("click", () => {
    leftScore.textContent++
    if(leftScore.textContent == scoreToTwin.value){
        leftScore.style.color ="green"
        rightScore.style.color = "red"
        btnPlayer1.disabled ="true"
        btnPlayer2.disabled ="true"
        leftWin.style.display = "block"

    }
})

btnPlayer2.addEventListener("click", () => {
    rightScore.textContent++
    if( rightScore.textContent == scoreToTwin.value) {
        rightScore.style.color ="green"
        leftScore.style.color = "red"
        btnPlayer1.disabled ="true"
        btnPlayer2.disabled ="true"
        rightWin.style.display = "block"
        
    }

})

  btnReset.addEventListener("click", () =>{
    location.reload()
  })


