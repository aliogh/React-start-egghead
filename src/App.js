// import React from 'react';
// import PropTypes from 'prop-types';

// // const App = () => <h1>Hello</h1>
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: "this is the state txt",
//       cat : 0
//     }
//   }
//   update (e){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     let txt = this.props.txt;
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <Widget update={this.update.bind(this)}/>
//         <p>{this.state.txt} - {this.state.cat} </p>
//         <p>{txt}</p> 
//       </div>
//     )
//   }
// }

// const Widget = (props) => <input type="text" onChange={props.update}/>

// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "this is the default prop of txt"
// }

// export default App;

// ----------------------------------------------------
// import React from 'react';

// class App extends React.Component{
//   render(){
//     return <Button>I <Heart/> React</Button>
//   }
// }

// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component {
//   render(){
//     return <span>&hearts;</span>
//   }
// }
// export default App

// ----------------------------------------------------

// import React from 'react';

// class App extends React.Component{
//   render(){
//     return <Title text="1234567"/>
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>
// Title.propTypes = {
//   text (props, propName, component){
//     if (!(propName in props)){
//       return new Error (`missin ${propName}`)
//     }
//     if (props[propName].length < 6){
//       return new Error (`${propName} is too short`)
//     }
//   }
// }

// export default App;

// -------------------------------------------------------

import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentEvent: '---'
    }
    this.update = this.update.bind(this)
  }
  update (e){
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
      <div>
        <textarea
        onKeyPress={this.update}
        onCopy = {this.update}
        onPaste = {this.update}
        onFocus = {this.update}
        onBlur = {this.update}
        onDoubleClick = {this.update}
        onTouchStart = {this.update}
        onTouchMove = {this.update}
        on onTouchEnd = {this.update}
        cols="30"
        rows="10" />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}


export default App;