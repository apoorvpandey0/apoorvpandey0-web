import React from 'react'

import  { useEffect, useRef } from "react";
import lottie from "lottie-web";

import contactFormAnimationLottie from "../assets/contact.json";

const ContactFormAnimation = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: contactFormAnimationLottie,
    });
    return () => lottie.stop();
  }, []);
  return <div style={{ height: 250, width: 300 }} ref={anime}>
  </div>;
};

export default function ContactForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function submitHandler(e) {
        e.preventDefault();
        var formData = {name,email,message};
        console.log(formData);
    }
    
    return (
        <div className='flex flex-row justify-between max-md:flex-col max-md:items-center'>
            <div className='md:hidden lg:block'>
                <ContactFormAnimation/>
                {/* <h2 className='text-2xl font-bold'>Contact me</h2> */}
            </div>

            {/* Name field */}
            <form class="max-w-lg w-full" onSubmit={submitHandler}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full  px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Full name
                    </label>
                    <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Harishankar Parsai"/>
                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    
                </div>

                {/* Email field */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Email
                    </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="hello@domain.com"/>
                    {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>

                {/* Message */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="text">
                        Message
                    </label>
                   <textarea name="textarea" placeholder='Enter your message here' value={message} onChange={(e)=>setMessage(e.target.value)} cols="30" rows="6" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' ></textarea>
                    {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>

                {/* Submit button */}
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                    <button class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit
                    </button>
                    </div>
                </div>
                
                </form>
        </div>
    )
}
