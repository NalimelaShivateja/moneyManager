const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const result = score === 12 ? 'Won' : 'Lose'
  const scoreTitle = score === 12 ? 'Best Score' : 'Score'
  const resultImgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const triggerPlayAgain = () => {
    playAgain(score)
  }

  return (
    <div>
      <div>
        <h1>You {result}</h1>
        <p>{scoreTitle}</p>
        <p>{score}/12</p>
        <button type="button" onClick={triggerPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={resultImgUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
