"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";

export default function Contact() {
  return (
    <section
      className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center "
      id="about"
    >
      <h3 className="dark:text-slate-200 text-center items-center justify-center text-4xl">
        Contact
      </h3>
      <span className="dark:text-slate-200 text-center items-center justify-center">
        send me a message
      </span>
      <div className="pt-10 pb-10 md:w-96 xl:w-fit w-full p-4">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullname" value="Nombre y Apellido" />
            </div>
            <TextInput
              id="fullname"
              type="text"
              placeholder="full name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Celular" />
            </div>
            <TextInput id="phone" type="text" placeholder="phone" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mensaje" value="Mensaje" />
            </div>
            <Textarea
              id="mensaje"
              type="text"
              style={{resize:'none'}}
              placeholder="Mensaje"
              className="h-48 p-2"
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}
