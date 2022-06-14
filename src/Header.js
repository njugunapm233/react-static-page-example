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

  export default Header