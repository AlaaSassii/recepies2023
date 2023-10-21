import { useRef, FormEvent } from "react";
import '../scss/Contact.scss'
const Contact = () => {
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputSubjetRef = useRef<HTMLInputElement | null>(null);
  const inputMessageRef = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputNameRef.current?.value;
    const email = inputEmailRef.current?.value;
    const subject = inputSubjetRef.current?.value;
    const message = inputMessageRef.current?.value;
    if (!name || !email || !subject || !message) {
      alert('Please fill all the fields');
      return;
    }
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  }
  return (
    <div className="container contact__container ">
      <div className="text">
        <h1>Get in Touch with Us for All Your Meal and Recipe Queries</h1>
        <p>If you have any questions, suggestions, or simply want to connect with us about all things meals and recipes, we're here to listen. Our team of culinary enthusiasts is eager to assist you in your culinary journey. Whether you're seeking expert advice, looking for specific recipes, or need assistance with any meal-related queries, we've got you covered. Your feedback and inquiries are invaluable to us, and we can't wait to help you explore the wonderful world of flavors and delicious cuisine. Reach out to us, and let's embark on this flavorful adventure together.</p>
      </div>
      <form className='contact__form ' onSubmit={handleSubmit}>
        <div className="user_data">
          <input type="text" placeholder='name' ref={inputNameRef} />
          <input type="email" placeholder='email' ref={inputEmailRef} />
        </div>
        <input type="text" placeholder='subject' ref={inputSubjetRef} />
        <textarea placeholder='message' ref={inputMessageRef} rows={10}></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
};

export default Contact;
