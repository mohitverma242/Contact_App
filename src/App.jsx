import './App.css'
import Input from './components/Input/Input'
import Show from './components/Show/Show'
import {Routes,Route} from "react-router-dom"
import { useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
    const [output, setOutput] = useState([])
    const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

    const deleteHandler=(index)=>{
      const dlt=output.filter((ele)=>{
           return ele.id !==index 
      })
      setOutput(dlt)
      console.log(index)
    }
    
    return (
      <>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Input output={output} setOutput={setOutput}  name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}/>} />
            <Route path="/show" element={<Show output={output} setOutput={setOutput} deleteHandler={deleteHandler} />} />
          </Routes>
        </main>
        <AppFooter/>
      </>
  )
}

export default App;
