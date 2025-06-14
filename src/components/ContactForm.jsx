import { useState } from "react";

export default function ContactForm() {

    const [result, setResult] = useState("");

    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    console.log("your key: ", accessKey);
      
    const handleSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "1660b308-a064-4918-bff0-bcb713ebc9a6");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your name" required/>
              <br />
              <input type="email" name="email" placeholder="E-mail" required/>
              <br />
              <textarea name="message" placeholder="Message.." required></textarea>
                <br />
              <button type="submit">SEND</button>
      
            </form>
            <span>{result}</span>
      
          </div>
        );
      }
      