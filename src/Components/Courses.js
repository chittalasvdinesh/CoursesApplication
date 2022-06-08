import React,{useState,useEffect} from 'react'
import { getCourses } from './Myservice';
import { Link } from 'react-router-dom';
export default function Courses() {
    const [course,setCourse]=useState([]);
    const [loading,setLoading]=useState(false)

   useEffect(()=>{
       setLoading(true)
    getCourses()
    .then(res=>{
        if(res){
            setLoading(false);
            setCourse(res.data)

        }
    })
    .catch(err=>console.log(err))

   },[])

  return (
      
    <>
    <div className="container">
        <h2>courses</h2>
        
        {loading?
    <img src="https://tse2.mm.bing.net/th?id=OIP.203OyIQrZQcvPAtttruksgHaD6&pid=Api&P=0&w=332&h=175" alt="loader"/>:
     <div style={{display:"flex", flexWrap:"wrap"}}>
         {course.map(val=>
            <div className="card" style={{width: "18rem", margin:"10px"}} key={val.id}>
            <div className="card-body">
              <h5 className="card-title">{val.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{val.category}</h6>
              <p className="card-text">{val.description}</p>
              <Link to="/form"><button type='button' className='btn btn-primary'>Enquire</button></Link>
              
            </div>
          </div>
            
            )}
     </div>
       
    }
        </div>
 

    </>
  )
}

// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/