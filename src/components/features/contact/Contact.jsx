import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqSRWDnOPY_1hdJfrb1K-g_06ikiAbHXg",
  authDomain: "portfolio-v2-b2adb.firebaseapp.com",
  projectId: "portfolio-v2-b2adb",
  storageBucket: "portfolio-v2-b2adb.appspot.com",
  messagingSenderId: "64522787481",
  appId: "1:64522787481:web:8ddf7aa9091bc21e227608",
  measurementId: "G-R2R1EJ9BG1"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullname = e.target.fullname.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const app = initializeApp(firebaseConfig);


    const db = getFirestore(app);
    const contactCollection = collection(db, 'contacts');

    try {
      await addDoc(contactCollection, {
        fullname,
        phone,
        email,
        message,
      });

      console.log('Message sent successfully!');
      // You can add a success message or redirect the user to a thank you page here
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error, show an error message to the user, etc.
    }
  }

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullname" value="Nombre y Apellido" />
            </div>
            <TextInput
              id="fullname"
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
            <TextInput id="phone" type="text" placeholder="phone" required className="shadow-md rounded-lg" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
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
              type="text"
              style={{ resize: 'none' }}
              placeholder="Mensaje"
              className="h-48 p-2 shadow-md rounded-lg"
              required
            />
          </div>
          <Button type="submit" outline gradientDuoTone="purpleToBlue" className="shadow-md">Submit</Button>
        </form>
      </div>
    </section>
  );
}
