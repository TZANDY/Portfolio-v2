import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from 'flowbite-react';

//import { getAnalytics } from "firebase/analytics";

/*const firebaseConfig = {
  apiKey: "AIzaSyBqSRWDnOPY_1hdJfrb1K-g_06ikiAbHXg",
  authDomain: "portfolio-v2-b2adb.firebaseapp.com",
  projectId: "portfolio-v2-b2adb",
  storageBucket: "portfolio-v2-b2adb.appspot.com",
  messagingSenderId: "64522787481",
  appId: "1:64522787481:web:8ddf7aa9091bc21e227608",
  measurementId: "G-R2R1EJ9BG1",
};*/

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setCargando(true);

    emailjs
      .sendForm(
        "service_8ux1ndu",
        "template_rkgh66n",
        form.current,
        "F-wQ4ku-MdSrQ2Nmm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje Enviado", result.text)
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error", error.text)
        }
      ).finally(() => {
        setEmail("");
        setFullname("");
        setPhone("");
        setMessage("");
        setCargando(false);
      });
  };

  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cargando, setCargando] = useState(false)
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname: e.target.fullname.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const contactCollection = collection(db, "contact");

    try {
      await addDoc(contactCollection, formData);
      console.log("Message sent successfully!");

      console.log("Message sent successfully!");
      // You can add a success message or redirect the user to a thank you page here
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error, show an error message to the user, etc.
    }
  };*/

  const handleChangeFullName = (e) => {
    setFullname(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section
      className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center"
      id="about"
    >
      <h3 className="dark:text-slate-200 text-center items-center justify-center text-4xl">
        Contact
      </h3>
      <span className="dark:text-slate-200 text-center items-center justify-center">
        send me a message
      </span>
      <div className="mt-10 mb-10 md:w-96 xl:w-96 w-full p-4 bg-slate-300 dark:bg-slate-600 shadow-xl rounded-md">
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullname" value="Nombre y Apellido" />
            </div>
            <TextInput
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={handleChangeFullName}
              type="text"
              placeholder="full name"
              className="shadow-md rounded-lg"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Celular" />
            </div>
            <TextInput
              id="phone"
              name="phone"
              type="text"
              value={phone}
              onChange={handleChangePhone}
              placeholder="phone"
              required
              className="shadow-md rounded-lg"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChangeEmail}
              className="shadow-md rounded-lg"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message" value="Mensaje" />
            </div>
            <Textarea
              id="message"
              name="message"
              type="text"
              value={message}
              onChange={handleChangeMessage}
              style={{ resize: "none" }}
              placeholder="Mensaje"
              className="h-48 p-2 shadow-md rounded-lg"
              required
            />
          </div>

          <Button
            type="submit"
            outline
            gradientDuoTone="purpleToBlue"
            className="shadow-md"
          >
            {cargando ? <Spinner color="warning" aria-label="Default status example" /> : <span className="pl-3">Submit</span>}
          </Button>

        </form>
      </div>
    </section>
  );
}
