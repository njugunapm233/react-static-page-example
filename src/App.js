
import './App.css';
import logo from './logo.svg'


function Header(){
  return(
<header className="bg-dark text-white ">
<nav className='nav'>
    <img src={logo} width='100px' alt="logo"></img>
    <ul className='nav-items'>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>
    </header>

  )
}

function MainComponents(){
  return(
    <div className='body'>
    <h1>Fun Facts About React</h1>
<hr className='bg-primary'/>
<ol className='list-group'>
  <li className='list-group-item'>Was first released in 2013</li>
  <li className='list-group-item'>Was Originally created by Jordan Walke</li>
  <li className='list-group-item'>Has well over 100K stars on Github</li>
  <li className='list-group-item'>Is maintained by Facebook</li>
  <li className='list-group-item'>Powers thousands of enterprise apps, including mobile apps</li>
</ol>
</div>
  )
}

function Footer(){
  return(
<div>
    <footer className='blockquote-footer footer'>
    <br/>
      &copy; 2022 Peter Njuguna. All rights reserved.
    </footer>
    </div>
  )
}


function App() {
  return (
    <div className="text-center fst-italic">
  <Header/>
    <MainComponents/>
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
