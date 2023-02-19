import React from "react"

export default class Box extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render (){
    console.log(this.props.on)

    let style = {
      backgroundColor: this.props.on ? "#cccccc" : "#222222"
    }

    return (
      <div style={style} className="box" onClick={() => {this.props.onClick(this.props.id)}}></div>
    )
  }
}

/*
Dev's comment

Apparently there are some situations in which the construction is useless. 
This appears to be the case for this component. As we implemented a 
constructor anyways, the ESLint, when configured in the text editor,
is going to warn us of this. We may ignore this warning by inserting
eslint-disable-next-line no-useless-constructor before the 
constructor.
*/