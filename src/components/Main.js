import React from "react"
import background from './react-libraries.png'
function Main(){
    return(
  <div className='' style={{
    backgroundImage: `url(${background})`
  }}>
  <hr/>
     <h1 className="text-info   fw-bolder ">Fun facts about React</h1> 
     <ul className="list-group text-center  d-grid gap-3 text-white">
      <li className="text-decoration-underline">Was first released in 2013</li>
      <li className="text-decoration-underline">Was originally created by Jordan Walkw</li>
      <li className="text-decoration-underline">Has well over 100k stars on Github</li>
      <li className="text-decoration-underline">Is maintained by Facebook</li>
      <li className=" text-decoration-underline">Powers thousands of enterprise apps, including mobile apps</li>
     </ul>
  </div>
    )
  }

  export default Main