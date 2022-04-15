import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      // state variables 
      this.state = {
         rating: 1,
         body: ""
      }

    }

    // methods that will change those variables
    handleRatingChange = (event) => {
        // to change the value, the value is captured inside the event.target value
        this.setState({
            rating: event.target.value
        })
    }

    handleBodyChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }

    handleSubmit = (event) => {
        // alert 
        //alert(`${this.state.rating} ${this.state.body}`)
        console.log("sending state to parent");
        this.props.parentCallback(this.state.rating, this.state.body);
        event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
              <label>Rating</label>
              {/* state variable is changed when the value here is updated. state variable will be assigned that value when it updates*/}
              <select value={this.state.topic}
              onChange={this.handleRatingChange}>
                  <option value="1 Star">1 Star</option>
                  <option value="2 Star">2 Star</option>
                  <option value="3 Star">3 Star</option>
                  <option value="4 Star">4 Star</option>
                  <option value="5 Star">5 Star</option>
              </select>
              
        </div>
        <div>
              <label>Body</label>
              <input type='string' 
              value={this.state.body} 
              onChange={this.handleBodyChange}></input>
        </div>
        <button type="submit">Send Review</button>
      </form>
    )
  }
}

export default Form