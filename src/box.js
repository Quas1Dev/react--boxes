import React from "react"

export default class Box extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.on)
    let style = {
      backgroundColor: this.props.on ? "#222222" : "#cccccc"
    }

    return (
      <div style={style} className="box" onClick={() => {this.props.onClick(this.props.id)}}></div>
    )
  }
}
