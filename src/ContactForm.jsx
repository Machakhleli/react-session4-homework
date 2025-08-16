// import { useState } from "react";

function ContactForm() {
  //   const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");

  return (
    <form
      className="max-w-md mx-auto my-8 h-auto flex flex-col gap-4 p-4  rounded-4xl shadow-2xl opacity-60
     bg-gradient-to-br from-blue-500 to-orange-400  text-white"
    >
      <label htmlFor="fullname">
        Full Name:
        <input type="text" name="fullName" id="fullName" />
      </label>
      <label htmlFor="email">
        Email Address
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="subject">
        Subject
        <input type="text" />
      </label>
      <label htmlFor="message">
        Message
        <textarea
          name="message"
          id="message"
          className="w-80 h-auto border rounded-lg p-2  text-white outline-none overflow-y-auto "
          placeholder="Type your message here..."
        ></textarea>
      </label>
    </form>
  );
}
export default ContactForm;
