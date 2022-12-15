import './App.css';
import Textbox from './components/textbox/textbox';

export default function App() {
  return (
    <div>
      <Textbox id="username" field="username:"></Textbox>
      <Textbox id="password" field="password:"></Textbox>
      <Textbox id="firstname" field="firstname:"></Textbox>
      <Textbox id="lastname" field="lastname:"></Textbox>
      <Textbox id="age" field="age:"></Textbox>
      <Textbox id="location" field="location:"></Textbox>

      <button onClick={() => {
        let username = document.querySelector("#username").value
        let password = document.querySelector("#password").value
        let firstname = document.querySelector("#firstname").value
        let lastname = document.querySelector("#lastname").value
        let age = document.querySelector("#age").value
        let location = document.querySelector("#location").value
      }}>Submit</button>
    </div>
  )
}


