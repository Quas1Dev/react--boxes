import React from "react"
import boxes from "./boxes.js"
import Box from "./box"
import './style.css'

export default class App extends React.Component {
  constructor(props) {
    // Calls Component's constructor
    super(props)

    // Set initial states value
    this.state = {
      boxArray: boxes
    }
  }

  // Change boxArray state each time a box gets clicked
  // It is not done in the components itself so we don't create two sources of
  // truth
  handleClick = (id) => {
    this.setState({
      boxArray: this.state.boxArray.map(box => box.id === id ? { ...box, on: !box.on } : box)
    });
  }

  // Gets called everytime the component is to be rendered
  render() {
    // Create a Box component for each element in boxArray
    let squares = this.state.boxArray.map(box => {
      /* instead of on=box.on and id=box.id we may use ...box */ 
      return <Box key={box.id} {...box} on={box.on} id={box.id} onClick={this.handleClick} />
    })

    return (
      <main>
        {squares}
      </main>
    )
  }
}
