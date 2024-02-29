import { useState } from "react";
import style from "./Show.module.css"
import { Modal } from "bootstrap";

const Show = ({ output,setOutput,deleteHandler}) => {
  const [changeName,setChangeName]=useState("")
  const [changeEmail,setChangeEmail]=useState("")
  const [changePhone,setChangePhone]=useState("")
  const [isEdit,setIsEdit]=useState(null)
  console.log(output)
  const editHandler=(index)=>{
      const newsEdit=output.find((ele)=>{
               return ele.id==index
      })
        setChangeName(newsEdit.Name)
      setChangeEmail(newsEdit.Email)
      setChangePhone(newsEdit.Phone)
      setIsEdit(newsEdit.id)
      console.log(newsEdit)
  }
const update=()=>{
   const upadateItem=output.map((ele)=>{
    if(ele.id==isEdit){
      return {...ele,Name:changeName,Email:changeEmail,Phone:changePhone}
    }
    return ele
   })
   setOutput(upadateItem)
   setChangeName("")
   setChangeEmail("")
   setChangePhone("")
}
  return (
      <div className={style.divContainer}>
        {output.map((item)=>(
        <div key={item.id} className={style.listContainer}>
          <p> Name : {item.Name}</p>
          <p> Email : {item.Email}</p>
          <p> Phone : {item.Phone}</p>
          <div className={style.mainbtnContainer}>
          <div ><button className="btn btn-success"onClick={()=>deleteHandler(item.id)}>Delete</button></div>
        <div> <button type="button"  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>editHandler(item.id)}>
Edit</button>
</div>
       </div>
        </div>
      ))}
           <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your contact here</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <label>Name : &nbsp; </label>
        <input type="text" placeholder="enter the name" value={changeName} onChange={(e)=>setChangeName(e.target.value)}/>
        <br/><br/>
        <label>Email : &nbsp; </label>
        <input type="text" placeholder="enter the email" value={changeEmail}onChange={(e)=>setChangeEmail(e.target.value)}/>
        <br/><br/>
        <label>Phone : &nbsp; </label>
        <input type="text" placeholder="enter the phone" value={changePhone}onChange={(e)=>setChangePhone(e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={update}>Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
  export default Show;