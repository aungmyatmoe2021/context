// Learning from React-လို-တို-ရှင်း - အခန်း(၆) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 17 Nov 2024 (04:00 PM)
// Description :  how to create context 

import React from "react";

// ရေးထုံး နံပါတ် ၁
// const myContext = React.createContext();

// const App = props => {
//   return(
//     <myContext.Provider value="Hello React Example 1">
//       <Header />
//     </myContext.Provider>
//   )
// }

// const Header = props => {
//   return <Title />
// }

// const Title = props => {
//   return(
//     <myContext.Consumer>
//       {
//         name => <h1>{name}</h1>
//       }
//     </myContext.Consumer>
//   )
// }


// ရေးထုံး နံပါတ် ၂
// const myContext = React.createContext("Hello React Example 2")

// const App = props => {
//   return <Header />
// }

// const Header = props => {
//   return <Title />
// }

// const Title = props => {
//   const name = React.useContext(myContext);
//   return <h1>{name}</h1>
// }

// ရေးထုံး နံပါတ် ၃ Class Component
const myContext = React.createContext("Hello React with class component")

class App extends React.Component{
  render(){
    return <Header />
  }
}

class Header extends React.Component{
  render(){
    return <Title />
  }
}

class Title extends React.Component{
  static contextType = myContext;
  render(){
    // const name = React.useContext(myContext); It can only support for functional component
    return <h1>{this.context}</h1>
  }
}

export default App;

