let userScore = 0
let comScore = 0
let choices = document.querySelectorAll('.choice')
let msg = document.querySelector('#msg')
let userScorepara = document.querySelector('#user-score')
let compScorepara = document.querySelector('#comp-score')

// Draw
const drawGame = () => {
  msg.innerHTML = 'Game was Draw. Play again'
  msg.style.backgroundColor = '#081b31' // Optional: Gray for draw
}

// User choice
const playGame = (userChoice) => {
  console.log('User Choice:', userChoice)
  const compChoice = genCompChoice()
  console.log('Computer Choice:', compChoice)

  if (userChoice === compChoice) {
    drawGame()
  } else {
    let userwin = false
    if (userChoice === 'rock') {
      userwin = compChoice === 'paper' ? false : true
    } else if (userChoice === 'paper') {
      userwin = compChoice === 'scissors' ? false : true
    } else {
      userwin = compChoice === 'rock' ? false : true
    }
    showWinner(userwin, userChoice, compChoice)
  }
}

// Show winner
const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++
    userScorepara.innerText = userScore
    msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = 'green'
  } else {
    comScore++
    compScorepara.innerText = comScore
    msg.innerHTML = `You Lose! ${compChoice} beats Your ${userChoice}`
    msg.style.backgroundColor = 'red'
  }
}

// Computer choice
const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  const randIdx = Math.floor(Math.random() * options.length)
  return options[randIdx]
}

// Click function
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id')
    playGame(userChoice)
  })
})
