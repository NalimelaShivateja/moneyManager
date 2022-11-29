const NavBar = props => {
  const {score, topScore, showGameResult} = props
  const x = showGameResult ? null : (
    <div>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji Logo"
      />
      <h1>Emoji Game</h1>
      {x}
    </div>
  )
}

export default NavBar
