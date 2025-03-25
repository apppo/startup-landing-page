import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-indigo-200">
      <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-indigo-600">SkillUp</h1>
        <button className="px-5 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow transition duration-300">
          Get Started
        </button>
      </nav>

      <main className="text-center py-20 px-5">
        <h2 className="text-5xl font-extrabold text-indigo-900 mb-4">
          Boost Your Career with Essential Soft Skills
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Interactive coaching, workshops, and resources crafted specifically for your professional growth.
        </p>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
          Join Now
        </button>
      </main>

      <section className="py-16 bg-white">
        <h3 className="text-4xl font-bold text-center text-indigo-900 mb-12">What We Offer</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-5">
          <div className="shadow-xl rounded-2xl p-6 bg-indigo-50 hover:shadow-2xl transition duration-300">
            <h4 className="font-semibold text-2xl text-indigo-800 mb-4">Personal Coaching</h4>
            <p className="text-gray-700">Customized one-on-one coaching sessions.</p>
          </div>
          <div className="shadow-xl rounded-2xl p-6 bg-indigo-50 hover:shadow-2xl transition duration-300">
            <h4 className="font-semibold text-2xl text-indigo-800 mb-4">Interactive Workshops</h4>
            <p className="text-gray-700">Online workshops designed to enhance soft skills.</p>
          </div>
          <div className="shadow-xl rounded-2xl p-6 bg-indigo-50 hover:shadow-2xl transition duration-300">
            <h4 className="font-semibold text-2xl text-indigo-800 mb-4">Resource Library</h4>
            <p className="text-gray-700">Exclusive resources, guides, and practical tips.</p>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-indigo-800">
        <p className="text-center text-indigo-200">
          &copy; {new Date().getFullYear()} SkillUp. All rights reserved.
        </p>
      </footer>
    </div>
  );
}