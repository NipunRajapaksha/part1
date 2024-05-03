import React,{useState} from "react";
import '../contact.css';


function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message  }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(data.success ? 'Thanks for contacting us!' : 'There was an error sending your message.');
      })
      .catch((error) => {
        setSuccess('There was an error sending your message.');
      });
  };

  return (
  <><>  <div class="heading">
      <h1>Intern Web Hub</h1>
      <h3> home>about us  </h3>

    </div></><form onSubmit={handleSubmit} className="contact-form">
        <h3>Get In Touch With Us</h3>
        <p>For More Information About Our Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div class="details">
        <div className="form-groups">
          <label>Mail:</label>
          <p>zfdfsffds</p>
        
          <label>Linked in:</label>
          <p>fsdfsggsdg</p>
        
          <label>Phone:</label>
          <p>Mobile: +(84) 546-6789</p>
          <p>Hotline: +(84) 456-6789</p>

          <label>Working Time:</label>
          <p>24x7 Hours Are Open</p>
        </div>
        </div>
       
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
    
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
          <label htmlFor="subject">Subject:</label>
          <textarea id="subject" name="subject" value={subject} onChange={(e) => setMessage(e.target.value)} required />
        
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <div class="button">
        <button type="submit">Submit</button>
        {success && <p className="success-message">{success}</p>}
        </div>
        </div>
        
        
        
      </form></>
  );
}

export default ContactForm;
