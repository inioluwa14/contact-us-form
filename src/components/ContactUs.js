import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [submit, setSubmit] = useState(null);

    const [form, setForm] = useState({
     name: "",
     email: "",
     subject: "",
     message: "",
    });

    
    const handleChange = (event) => {
       event.preventDefault();
       // console.log(event);
       const updatedForm = {...form, [event.target.id]: event.target.value}
    //    console.log(updatedForm)
       setForm(updatedForm);
       // alert(email + " " + password);
     }
    const endpointData = "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries"
  
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            // console.log(event);
            // console.log("Email is " + form.name);
            // console.log("Message is " + form.message);
            // alert(form.name + " " + form.message);
            const response = await axios.post(endpointData, {form})
            console.log(response.data);
            // setError(null);

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
               })
        }
        catch(err) {
            // setError(err.message);
            setForm(null)
            console.log(err)
            // setSubmit(null);
        }
        // finally{
        //     setLoading(false);
        // }
    };
   
     return (
       <div style={{padding:"8px"}}>
         <h1>Contact Us Form</h1>
         {/* {loading && <div> Data is loading. Please wait</div>}
         {error && <div>{`There is a problem fetching your data - ${error}`}</div>} */}
           <form onSubmit={handleSubmit}>
           <div style={{padding:"8px"}}>
               <label htmlFor="name" style={{display:"block"}}>Fullname</label>
               <input type="text" name="name" id="name" value={form.name}  onChange={handleChange} required/>
           </div>
           <div style={{padding:"8px"}}>
               <label htmlFor="email" style={{display:"block"}}>Email</label>
               <input type="email" name="email" id="email" value={form.email}  onChange={handleChange} required/>
           </div>
           <div style={{padding:"8px"}}>
               <label htmlFor="subject" style={{display:"block"}}>Suject</label>
               <input type="text" name="subject" id="subject" value={form.subject}  onChange={handleChange} />
           </div>
           <div style={{padding:"8px"}}>
               <label htmlFor="message" style={{display:"block"}}>Message</label>
               <textarea name="message" id="message" cols="60" rows="10" value={form.message} onChange={handleChange} required>Enter your messge here...</textarea>
           </div>
           {/* <div style={{padding:"8px"}}>
               <label htmlFor="password"  style={{display:"block"}}>Password</label>
               <input type="password" name="password" id="password" value={form.password} onChange={handleChange} />
           </div> */}
           <button type='submit'>Submit</button>
           </form>
       </div>
     )
   }

export default ContactUs