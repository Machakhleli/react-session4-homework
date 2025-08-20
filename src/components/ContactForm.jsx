import { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevDAta) => ({
      ...prevDAta,
      [name]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-8 h-auto flex flex-col gap-4 p-4  rounded-4xl shadow-2xl opacity-60
     bg-gradient-to-br from-blue-500 to-orange-400  text-white"
    >
      <label htmlFor="fullname">
        Full Name:
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Firstname Lastname"
          value={formData.fullName}
          onChange={handleChange}
          className="focus:placeholder-transparent"
        />
      </label>
      <label htmlFor="email">
        Email Address
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          className="focus:placeholder-transparent"
        />
      </label>
      <label htmlFor="subject">
        Subject
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="focus:placeholder-transparent"
        />
      </label>
      <label htmlFor="message">
        Message
        <textarea
          name="message"
          id="message"
          value={formData.message}
          className="w-80 h-auto border rounded-lg p-2  text-white outline-none overflow-y-auto focus:placeholder-transparent"
          placeholder="Type your message here..."
          onChange={handleChange}
        ></textarea>
      </label>
      <button className="w-[5rem] mx-auto border-1 rounded-lg p-1 cursor-pointer hover:bg-blue-100 hover:text-orange-400">
        Submit
      </button>
      <Checkbox />
      <RadioButtons />
    </form>
  );
}
export default ContactForm;
