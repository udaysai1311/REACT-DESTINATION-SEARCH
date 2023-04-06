import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''} //  build-in React Object

  onInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchInputList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg">
        <h1 className="head">Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            className="search"
            placeholder="Search"
            onChange={this.onInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <div>
          <ul className="list-container">
            {searchInputList.map(items => (
              <DestinationItem items={items} key={items.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
