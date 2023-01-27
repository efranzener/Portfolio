import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';





    
function Contact (){


    const form = useRef();

    const [state, setState] = useState({
        firstName: '', 
        lastName: '', 
        message:'', 
        email: '', 
    })

   
    function handleChange (evt) {
        const value= evt.target.value;
        setState ({
            ...state, [evt.target.name]: value
        });


    }

    
    const sendEmail = (e) => {
        e.preventDefault();
    
   

        emailjs.sendForm('service_fjk6k3r', 'template_nl777uw', form.current, '1cOh33rRGb0uXFNVe')
            .then((response) => {
                console.log(response.text)
                setState({
                    firstName: '', 
                    lastName: '', 
                    message:'', 
                    email: '', 
                })
                

            }, (error) => {
                console.log(error.text);
            });
        }
    
      
        return (
            <div className='header'> 
                <form ref={form} onSubmit={sendEmail} >
                    <label>First Name</label>
                    <input type="text" name="firstName" value={state.firstName} onChange={handleChange} required/>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={state.lastName} onChange={handleChange} required/>
                    <label>Email</label>
                    <input type="email" name="email" value={state.email} onChange={handleChange}required/>
                    <label>Message</label>
                    <textarea name="message" value={state.message} onChange={handleChange}/>
                    <input type="submit" value="Send" />
                </form>
            </div>
         
        );
}

// function Success () {

    
//     return (
//         <Message
//         success
//         header='Your user registration was successful'
//         content='You may now log-in with the username you have chosen'
//         />    
//     );
// }


export default Contact;