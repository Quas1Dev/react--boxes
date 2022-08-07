import React from "react"
import boxes from "./boxes.js"
import './style.css'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      boxArray: boxes
    }
  }

  handleClick(){
    this.setState({
      boxArray: boxes
    });
  }

  render(){
    let squares = this.state.boxArray.map(box => {
      return <div className="box" key={box.id}></div>
    })

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
      <main>
        {squares}
      </main>
    )
  }
}
