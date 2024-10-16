import React, { useRef, useState } from 'react';
import DefaultLayout from "@/layouts/default";
// import 'mapbox-gl/dist/mapbox-gl.css';
import { Input, Button } from '@nextui-org/react';

export default function Contact() {
  const mapContainerRef = useRef(null); // 引用地图容器
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const formData = {
      name,
      email,
      message,
      phone
    }

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage('Email sent successfully!');
      } else {
        setStatusMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <DefaultLayout>
      <section >
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 text-center">
          <div className="">
            <p style={{ color: '#557b9a', padding: 10 }}>CONTACT US</p>
            <div style={{ fontSize: 36, }}>Get In Touch With Us</div>
            <p style={{ color: '#A4A4A4', padding: 10 }}>Contact us now to discuss your needs and get personalized assistance</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="w-full sm:w-80 bg-[#222121] rounded-md flex flex-col items-center  text-white font-bold p-8 min-h-[150px]">
              <div style={{ backgroundColor: '#557b9a', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/icon/location.svg" alt="location" style={{ width: '32px', height: '32px' }} />
              </div>
              <h1 className="text-xl mb-2 text-center py-5">Office Location</h1>
              <div className="text-base text-center " style={{ color: '#A4A4A4' }}>
                L.A. Mapping Service, Inc
                <br />
                781 Pinefalls Avenue
                <br />
                Diamond Bar, CA 91789
              </div>
            </div>

            <div className="w-full sm:w-80 bg-[#557b9a] rounded-md flex flex-col items-center text-white font-bold p-8 min-h-[150px]">
            <a href="tel:626-383-5050" >

              <div style={{ backgroundColor: '#222121', padding: '15px', alignItems: 'center' }}>
                <img src="/images/icon/telephone-fill.svg" alt="telephone" style={{ width: '32px', height: '32px' }} />
              </div>
              </a>

              <h1 className="text-xl mb-2 text-center py-5">Give Us A Call</h1>
              <a href="tel:626-383-5050" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <div className="text-base" style={{ color: '#A4A4A4' }}>
                  (909) 595-0903
                </div>
              </a>

            </div>

            <div className="w-full sm:w-80 bg-[#222121] rounded-md flex flex-col items-center text-white font-bold p-8 min-h-[150px]">
              <div style={{ backgroundColor: '#557b9a', padding: '15px', alignItems: 'center' }}>
                <img src="/images/icon/envelope-fill.svg" alt="telephone" style={{ width: '32px', height: '32px' }} />
              </div>
              <h1 className="text-xl mb-2 py-5">Email Us</h1>
              <div className="text-base" style={{ color: '#A4A4A4' }}>
                support@radiusmap4less.com
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
          <div className="mb-4">
            <Input
              fullWidth
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)} // 更新 name 状态
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              fullWidth
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // 更新 email 状态
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              fullWidth
              label="Phone"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // 更新 phone 状态
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              fullWidth
              label="Message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // 更新 message 状态
              className="w-full"
            />
          </div>
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </form>
      </section>

    </DefaultLayout>
  );
}
