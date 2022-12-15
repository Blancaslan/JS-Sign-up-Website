import './textbox.css';

export default function textbox({id, field}) {
  return (
    <div>
        <label>{field}</label>
        <input id={id}></input>
    </div>
  )
}