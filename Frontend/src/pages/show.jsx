import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ShowStudent = () => {
  const {matno} = useParams()
  const [student,setStudent] = useState()

  useEffect(()=>{
    const GetDetails = async() =>{
      const response = await axios.get(`http://localhost:9000/api/${matno}`)
      if(response){
        setStudent(response.data)
      }
      alert(student.fullname)
    }

    GetDetails()  
  
  },[matno])

  return (
    <>
      <div className="">
        
      </div>
    </>
  )
}

export default ShowStudent