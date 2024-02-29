import { useState } from "react"
import style from "./Input.module.css"

const Input=({output,setOutput,name,setName,email,setEmail,phone,setPhone})=>{



  const btnHandler = () => {
    if(name.length==""){
      alert("Please enter the name")
      return ;
    }
    if(name.length<3){
      alert("Please enter your full name")
      return;
    }
      const regEx= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
      if(!regEx.test(email)){
        alert("Please enter the valid email")
        return;
      }
      if(phone.length==""){
        alert("please enter the phone number")
        return;
      }
      if(phone.length<10){
        alert("Enter the valid phone number")
        return ;
      }
    setOutput([...output, {
      Name: name,
      Phone: phone,
      Email: email,
      id:new Date().getTime().toString(),
    }])
    setName("")
    setEmail("")
    setPhone("")
  }

  return (
    <div className={style.inputContainer}>
  
      <label>Name : </label>
      <input type="text" value={name} placeholder="enter the name " onChange={(e) => { setName(e.target.value) }} />
      <br />
      <label> Email : </label>
      <input type="email" value={email} placeholder="enter the email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Number : </label>
      <input type="number" value={phone} placeholder="enter the number" onChange={(e) => setPhone(e.target.value)} />
      <br /><br />
       <button className="btn btn-primary"onClick={btnHandler} disabled={name.length==0}>ADD Contact</button>

      </div>
  )
}

export default Input;