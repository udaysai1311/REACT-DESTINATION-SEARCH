import './index.css'

const DestinationItem = props => {
  const {items} = props
  const {name, imgUrl} = items
  return (
    <li className="lists-container">
      <img src={imgUrl} className="images" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
