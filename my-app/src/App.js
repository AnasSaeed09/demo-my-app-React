import React , { useState, useRef } from 'react';// Import React
import { excerciseComplete , exportTheValue } from './screens/about.js';
import './App.css'; // Import CSS file for styling

function App() {
  function toggleMode(event){
     
  }

  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
    age:'',
    city:''
  });

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData({...formData, [name]:value});
  };
  


  const [isLoading, setIsLoading] =useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const MissingFields = Object.values(formData).some((value) => {
      const trimmedValue = String(value).trim();
      return trimmedValue === '';
    });
   
    if(MissingFields){
      alert('Some fields are missing!');
    }
    else {
      try{
        setIsLoading(true); 
    await excerciseComplete(formData);
   displayInfoRef.current.style.display ='block';
   
       } catch (error){
        console.log('Error submitting form:',error);
       } finally{
        console.log("Setting isLoader is false");
        setIsLoading(false);
       }
  }

  };
  function checkTOForward(e){
       
          const SelectNumber =parseInt( e.target.value);
          let newFormData = exportTheValue(SelectNumber);
          if(newFormData){
            setFormData(newFormData);
          }
        };
        
     function closebtn(){
      displayInfoRef.current.style.display='none';

     }
   const displayInfoRef= useRef(null);
  
  return (
    
      <div className='container'>
        <header><h1 className='fst_head'>Javascript Objects</h1></header>
        <button className='modestn' onChange={toggleMode}><span className='lightmd'>Light</span>&nbsp;<span className='darkmd'>Dark</span></button>
         <div className="user_input" >
          <form onSubmit={handleSubmit}>
            <fieldset className='chng_field'>
              <legend>User Information</legend>
               <label htmlFor='fname'>First Name </label><br/>
               <input type='text' className="fname" name='fname' placeholder='First Name' onChange={handleChange}/><br/><br/>
               <label htmlFor='lname'>Last Name </label><br/>
               <input type='text' className="lname" name='lname' placeholder='Last Name' onChange={handleChange}/><br/><br/>
               <label htmlFor='age'>Age </label><br/>
               <input type='text' className="age" name='age' placeholder='Age' onChange={handleChange}/><br/><br/>
               <label htmlFor='city'>City </label><br/>
               <input type='text' className="city" name='city' placeholder='City' onChange={handleChange}/><br/><br/>
               <button type='submit' className='sub_btm'>Submit</button>

            </fieldset>
            </form>
             {isLoading&& <p>Loading...</p>}
          </div> 

          <div className="Display_info" ref={displayInfoRef} style={{display: 'none'}}>
            <fieldset>
            <legend className='User_info'>Profile</legend>
            <div className="user-info">
              <div className="info-item">
               <label htmlFor='fname'>First Name :</label>
                <span className='inline-span'>{formData.fname}</span>
             </div>
             
              <div className="info-item">
               <label htmlFor='lname'>Last Name :</label>
               <span className='inline-span'>{formData.lname}</span>
              </div>
              <div className="info-item">
               <label htmlFor='age'>Age :</label>
               <span className='inline-span'>{formData.age}</span>
              </div>
              <div className="info-item">
                <label htmlFor='city'>City :</label>
               <span className='inline-span'>{formData.city}</span>
             </div>
             <div className="info-item">

              </div>
           </div>
        </fieldset>

            <div className='slctNmb'>
          {/* Drop Down Menu */}
            <label>Exercise No </label>
             <select className='numberSelect' onChange={checkTOForward}>
              {Array(50).fill(0).map((_,index)=> (
                <option key ={index+1} value={index+1}>{index+1}</option>
              ))}
             </select>
             </div>
               <button className='closebtn' onClick={closebtn}
               style={{
                position:'absolute',
                top:'10px',
                right:'10px',
                color:'red',
                fontSize:'30px',
                 textDecoration:'none'

               } 
              }
               > &times;</button>
          </div>
         
                

      </div>
  );
}

export default App;


