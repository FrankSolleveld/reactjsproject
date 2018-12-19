import React from 'react'
import './App.css'
import underscore from '../node_modules/underscore/dist/css/underscore.min.css'

const Stars = (props) => {
  const numberOfStars = Math.floor(Math.random() * 9)
 
  let stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<i className="fa fa-star"></i>)
  }

  return (
    <div className="col-5">
      {stars}
    </div>
  )

}

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-5">
      <span>8</span>
    </div>
  )
}

const Numbers = (props) => {
  const arrayOfNumbers = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) =>
            <span key={i}>{number}</span>
          )}
      </div>
    </div>
  )
}

Numbers.list = (1,2,3,4,5,6,7,8,9)

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr></hr>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}

export default <App />