
import './App.css';

import Navbar from './components/Navbar'

import Main from './components/Main';

import Footer from './Footer';



function App() {
  return (
    <div className="container">
  <Navbar/>
    <Main/>
 <Footer/>
  </div>
 
  );
}

// NOTE
// 1) JSX code is defined in our react componenent
// 2) When you console.log any jsx variable we get js objects as children
// 3) Declarative programming tells the computer what to do.
// 4) Imperative tells the computer how to do everything in steps
// 5) Composable means that we have small pieces that can be put together to make something larger.
// 6) A function that returns React elements[UI]
// 7) Components names should be in pascal case[Fisrt letter should be in capital ]

     
  

export default App;

// NOTE: Why React
// 1.) Its composable 
// 2.) It Declarative
//  3.) JSX - Declarative
