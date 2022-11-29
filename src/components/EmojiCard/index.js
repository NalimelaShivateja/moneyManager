const EmojiCard = props => {
  const {id, emojiName, emojiUrl, UpdateClickedItems} = props

  const triggerUpdateClickedItems = () => {
    UpdateClickedItems(id)
  }

  return (
    <li>
      <button type="button" onClick={triggerUpdateClickedItems}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
