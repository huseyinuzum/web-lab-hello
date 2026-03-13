import React, { useState } from 'react';
import { Button, Input } from '../components/ui';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl rounded-3xl bg-white/80 dark:bg-slate-900/70 p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-2">İletişim</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Bir proje fikriniz veya iş birliği öneriniz varsa lütfen mesaj bırakın.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="name"
              label="İsim"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              id="email"
              label="E-posta"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex flex-col space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Mesaj
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                rows={5}
                required
              />
            </div>
            <Button type="submit" variant="primary" size="md">
              Gönder
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;