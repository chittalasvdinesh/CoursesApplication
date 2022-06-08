import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addQuery } from './Myservice';

export default function Form() {
    const [state,setState]=useState({name:"", email:"", course:"Javascript",query:""});
    const[errMsg,setErrMsg]=useState({nameErr:"",emailErr:"", queryErr:""});

    const navigate=useNavigate()

    const handler=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value});
        console.log(state)
    }


    const validateName=()=>{
        setErrMsg({nameErr:""})
         
         let nameVal=state.name;
         nameVal=nameVal.replace(/\s/g,"");
         let regExp=new RegExp("^[A-Za-z0-9]*$");
         if(nameVal===""){
             setErrMsg({nameErr:"It should be filled"});
            
             return false
         }
         else if(regExp.test(nameVal)===false){
             setErrMsg({nameErr:"Invalid name"})
             return false
         }
         else{
             
             return true
         }
     
     
     
     }

     const validateEmail=()=>{
         setErrMsg({emailErr:""})
         let emailVal=state.email;
         let regExp= new RegExp("^[A-Za-z0-9.@]*$");
         if(emailVal===""){
             setErrMsg({emailErr:"It should be filled"});
             return false
         }
         else if(regExp.test(emailVal)===false){
             setErrMsg({emailErr:"Invalid email"})
             return false
         }
         else{
             
             return true
         }
     
     }

     const validateQuery=()=>{
         setErrMsg({queryErr:""});
         let queryVal=state.query;
         if(queryVal===""){
            setErrMsg({queryErr:"It should be filled"});
            return false
        }
        else{
            return true
        }
     }

     const validateForm=()=>{
         return validateName() && validateEmail() && validateQuery()
     }

     const postQuery=(e)=>{
         e.preventDefault()
         if(validateForm()){
             addQuery(state)
             .then(res=>{
                 console.log(res)
                 if(res){
                     alert('query added');
                     navigate('/enquirydetails');

                 }
                
             })
             .catch(err=>console.log(err))
         }
     }


    
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <h2>Enquiry form</h2>
                        <form onSubmit={postQuery}>
                            <div className='form-group'>
                                <label htmlFor="name" className='form-label'>Name</label>
                                <input type="text" className='form-control' name='name' placeholder='Your name' onChange={handler} onBlur={validateName}/>
                                <p className='text-danger'>{errMsg.nameErr}</p>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="email" className='form-control' name='email' placeholder='Your Email' onChange={handler} onBlur={validateEmail} />
                                <p className='text-danger'>{errMsg.emailErr}</p>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Select your Course</label>
                                <select className="form-select" name='course' id="inputGroupSelect01" onChange={handler}>

                                    <option value="Javascript">Javascript</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="Query" className='form-label'>Query</label>
                                <textarea id='Query' cols="70" rows="6" name='query' placeholder='Enter a query' onChange={handler} onBlur={validateQuery}></textarea>
                                <p className='text-danger'>{errMsg.queryErr}</p>
                            </div>
                            <div className='form-group'>
                                <input type="submit" value="submit" className='btn btn-success'/>
                            </div>

                        </form>
                        
                    </div>
                </div>
            </div>


        </>
    )
}
