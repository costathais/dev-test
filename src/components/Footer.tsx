"use client";

import Image from 'next/image';
import { useState } from 'react';
import { FooterProps } from '@/types';
import logo from '../../public/assets/logo-wht.png';

export default function Footer({ menuItems = [] }: FooterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  
  function validate() {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Email inválido';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      alert(`Mensagem enviada!\nNome: ${name}\nEmail: ${email}`);
      setName('');
      setEmail('');
      setErrors({});
    }
  }
  
  return (
    <footer className="bg-[#170038]">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-8">
    <div className="flex flex-col gap-8">
    <Image src={logo} alt="Logo" width={120} height={40} />
    <nav className="flex flex-col">
    {menuItems.map((item, idx) => (
      <a
      key={idx}
      href={item.url}
      className="text-white"
      >
      {item.name}
      </a>
    ))}
    </nav>
    </div>
    
    <form onSubmit={handleSubmit} className="w-full max-w-sm" noValidate>
    <h2 className="text-xl font-semibold text-white mb-4">Fale conosco</h2>
    
    <div className="mb-4">
    <input
    id="name"
    type="text"
    placeholder="Nome *"
    value={name}
    onChange={e => setName(e.target.value)}
    className={`w-full h-[35px] placeholder-gray-300 border rounded-lg px-4 py-2${
      errors.name ? ' border-red-500 placeholder-red-500' : ' border-gray-300 placeholder-gray-30'
    }`}
    required
    />
    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
    </div>
    <div className="mb-4">
    <input
    id="email"
    type="email"
    value={email}
    placeholder="Email* "
    onChange={e => setEmail(e.target.value)}
    className={`w-full h-[35px] placeholder-gray-300 border rounded-lg px-3 py-2${
      errors.email ? ' border-red-500 placeholder-red-500' : ' border-gray-300 placeholder-gray-30'
    }`}
    required
    />
    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
    </div>
    
    <button
    type="submit"
    className="bg-white text-[#170038] uppercase font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
    >
    Enviar mensagem
    </button>
    </form>
    </div>
    </footer>
  );
}