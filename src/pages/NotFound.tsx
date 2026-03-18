import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 bg-neutral-50 text-center px-4">
      <Helmet>
        <title>Page Not Found | Lopez Lawncare</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <h1 className="text-8xl font-bold text-lime-500 mb-6">404</h1>
      <h2 className="text-3xl font-bold text-neutral-900 mb-6">Oops! We couldn't find that page.</h2>
      <p className="text-lg text-neutral-600 mb-10 max-w-lg">
        It looks like you took a wrong turn. Let's get you back to the beautiful lawns and patios.
      </p>
      <Link
        to="/"
        className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors rounded-sm shadow-md"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
