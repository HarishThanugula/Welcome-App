import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribed'}

  buttonClick = () => {
    const {text} = this.state

    if (text === 'Subscribed') {
      return (
        <button type="button" className="btn">
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" className="btn">
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {this.buttonClick()}
      </div>
    )
  }
}

export default Welcome
