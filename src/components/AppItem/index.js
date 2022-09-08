import './index.css'

const AppItem = props => {
  const {itemData} = props
  const {appName, imageUrl} = itemData

  return (
    <li className="app-item-bg-container">
      <img className="app-item-img" src={imageUrl} alt={appName} />
      <p className="app-item-name">{appName}</p>
    </li>
  )
}

export default AppItem
