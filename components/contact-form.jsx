import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    // 在这里处理表单提交逻辑
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <Input
          fullWidth
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Input
          fullWidth
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Input
          fullWidth
          label="Message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
