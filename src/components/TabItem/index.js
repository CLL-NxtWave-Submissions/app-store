import './index.css'

const TabItem = props => {
  const {itemData, itemSelectHandler, isSelected} = props
  const {tabId, displayText} = itemData

  const itemStyling = isSelected ? 'tab-item selected-tab-item' : 'tab-item'

  const itemClickHandler = () => {
    itemSelectHandler(tabId)
  }

  return (
    <li className={itemStyling} onClick={itemClickHandler}>
      <button type="button" className="tab-item-button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
