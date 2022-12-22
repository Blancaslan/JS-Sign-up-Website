import './App.css';
import Textbox from './components/textbox/textbox';

export default function App() {
  return (
    <div className="outerbox">
      <div className="taskbar">
      <Textbox id="username" field="username:"></Textbox>
      <Textbox id="password" field="password:"></Textbox>
      <Textbox id="firstname" field="firstname:"></Textbox>
      <Textbox id="lastname" field="lastname:"></Textbox>
      <Textbox id="age" field="age:"></Textbox>

      <button onClick={() => {
        let username = document.querySelector("#username").value
        let password = document.querySelector("#password").value
        let firstname = document.querySelector("#firstname").value
        let lastname = document.querySelector("#lastname").value
        let age = document.querySelector("#age").value
        let data = [username, password, firstname, lastname, age]
        createAccount(data)
      }}>Submit</button>
      </div>
    </div>
  )
  // make function here to send GET and POST request to my API in python
  function createAccount(data) {
    fetch('http://127.0.0.1:5000/Post', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
  }
}
