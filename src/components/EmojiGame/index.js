/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedItems: [],
    showGameResult: false,
  }

  UpdateClickedItems = id => {
    const {clickedItems, score} = this.state
    if (clickedItems.includes(id) || score + 1 === 12) {
      this.setState(prevState => ({
        showGameResult: true,
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        clickedItems: [...prevState.clickedItems, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgain = userScore => {
    const {topScore} = this.state
    if (userScore > topScore) {
      this.setState({
        topScore: userScore,
        score: 0,
        showGameResult: false,
        clickedItems: [],
      })
    } else {
      this.setState({score: 0, showGameResult: false, clickedItems: []})
    }
  }

  render() {
    const {score, topScore, showGameResult, clickedItems} = this.state
    console.log(showGameResult, clickedItems)

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojisList = shuffledEmojisList()
    const mainComponent = showGameResult ? (
      <WinOrLoseCard score={score} playAgain={this.playAgain} />
    ) : (
      <ul>
        {emojisList.map(x => (
          <EmojiCard
            {...x}
            key={x.id}
            UpdateClickedItems={this.UpdateClickedItems}
          />
        ))}
      </ul>
    )

    return (
      <div>
        <NavBar
          score={score}
          topScore={topScore}
          showGameResult={showGameResult}
        />
        {mainComponent}
      </div>
    )
  }
}
export default EmojiGame
