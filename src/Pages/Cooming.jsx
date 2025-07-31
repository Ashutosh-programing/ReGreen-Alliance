import React from 'react';
import { useForm } from 'react-hook-form';

export default function ComingSoon() {
  const {handleSubmit , register} = useForm();
  const onsubmit = (data)=>{
    alert("Thank u "+data.email+" we will notify you")
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-100 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-4">🚧 Coming Soon!</h1>
        <p className="text-gray-600 text-lg mb-6">
          We’re working hard to bring something amazing to life. Stay tuned!
        </p>
        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col sm:flex-row items-center gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}