import './App.css';
import {useState, useEffect} from "react";

function App() {
  const initialValue = { username: "", email: "", password: "", subject:""};
  const [formvalues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit]= useState(false);

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormValues({...formvalues, [name]: value})
    console.log(formvalues);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true)
    // if(setIsSubmit(true)){
    //   this.props.router.push('https://stackoverflow.com/questions/49685587/redirect-to-another-page-after-submitting-a-form')
    // }
  };

useEffect(()=>{
  console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formvalues);
  } 
},[formErrors])
 
  const validate =(values) =>{
    const errors = {}
    errors.className="error";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username){
      errors.username= "Username is required!";
    }
    if (!values.email){
      errors.email= "email is required!";
    }else if(!regex.test(values.email)){
       errors.email = "This is not a valid email format!" ;
    }
    if (!values.password){
      errors.password= "password is required!";
    }else if(values.password.length < 4){
      errors.password = "Password must be more then 4 characters"; 
     }else if(values.password.length > 10){
      errors.password = "Password cannot exceed more then 10 characters"; 
       }

      //  if (!values.subject){
      //   errors.subject= "subject is required!";
      // }
    return errors;
  }
  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='message'>Singed in successfullt</div>):
      (<pre>{JSON.stringify(formvalues)}</pre>)} */}
      <form action="" onSubmit={handleSubmit} className='form'>
        <h1>Login Form</h1>
            <div className='row'>
             <div className="col-25">
               <label htmlFor="" >UserName</label>
             </div>
               <div className="col-75">
                  <input type="text" name='username' placeholder='Username' value={formvalues.username}
                  onChange={handleChange} />
                </div>
                <p>{formErrors.username}</p>
            </div>

            <div className='row'>
               <div className="col-25">
                 <label htmlFor="" >Email</label>
               </div>
               <div className="col-75">
                 <input type="text" name='email' placeholder='Email' value={formvalues.email}
                 onChange={handleChange} />
                 </div>
                 <p>{formErrors.email}</p>
            </div>

            <div className='row'>
               <div className="col-25">
                 <label htmlFor="" >Password</label>
               </div>
                <div className="col-75">   
                  <input type="password" name='password' placeholder='Password' value={formvalues.password}
                 onChange={handleChange} />
                </div>
                <p>{formErrors.password}</p><br />
           </div>

           <div className="row">
              <div className="col-25">
                <label htmlFor="">Subject</label>
              </div>
              <div className="col-75">
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}} value={formvalues.subject}
                onChange={handleChange}></textarea>
              </div>
           </div>

            <div className="row">
               <button className='btn'>Submit</button>
            </div>
      </form>
    </div>
  );
}

export default App;
