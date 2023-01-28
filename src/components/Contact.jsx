import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';








function Contact () {

    const [show, setShow] = useState(false);

    const form = useRef();
    const [success, setSuccessMessage] = useState(false);
    const [failure, setFailureMessage] = useState(false);

    // const [alert, setAlert] = useState({variant: 'light'})
    const [state, setState] = useState({
        firstName: '', 
        lastName: '', 
        message:'', 
        email: '', 
    });

   
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
                setSuccessMessage(true)                

            }, (error) => {
                console.log(error.text)
                setFailureMessage(true)
               
            });

            setSuccessMessage(false)
            setFailureMessage(false)
        }
    
      
        function Message () {

            let message = '';
            let variant = '';
         
            if (success){
                setShow(true)
                message = "Thank you for getting in touch. This is to confirm your message was successfully sent."
                variant = 'success'
            } else if (failure){
                message = "I'm sorry, your message was not delivered. If your wish to get in touch you can always send a direct email to efranzener.mp@gmail.com"
                variant ='danger'
                setShow(true)
            } else {
                message =''
                
            }   
            return (
                <div>
                    <Alert show={show} variant = {variant}  onClose={() => setShow(false)} dismissible >
                        <p>{message}</p>
                    </Alert>
                    {console.log(variant)}
                </div>
                
                
            );
                
            }

        return (
        <div className = "projectPage">
            <div className="contactForm">  
                <form className="formContainer"  ref={form} onSubmit={sendEmail} >
                    <h2> CONTACT </h2>
                    <div>
                        <label>First Name</label>
                        <input type='text' name='firstName' value={state.firstName} onChange={handleChange} required/>
                        <label>Last Name</label>
                        <input type='text' name='lastName' value={state.lastName} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name='email' value={state.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea  type='textarea' name='message' value={state.message} onChange={handleChange} required/>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
            <div className='alertMessage'>
                <Message/>
            </div>
        </div>
        );
}




export default Contact;