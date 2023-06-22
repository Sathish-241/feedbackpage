import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: true,
  }

  sendFeedback = () => {
    this.setState({
      isFeedbackGiven: false,
    })
  }

  render() {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {isFeedbackGiven ? (
          <div className="bg-container">
            <h1 className="question-text">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachItem => (
                <li className="emoji-container" key={eachItem.id}>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.sendFeedback}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="img"
                    />
                  </button>
                  <p className="emoji-title">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="feedback-title">Thank You!</h1>
            <p className="feedback-text">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
