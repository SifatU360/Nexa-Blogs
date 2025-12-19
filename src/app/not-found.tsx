'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2s" />
      <div className="absolute -bottom-20 left-1/2 w-36 h-36 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4s" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated 404 Number */}
        <div className={`transform transition-all duration-1000 ${animate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="text-9xl font-bold text-green-400 drop-shadow-lg animate-bounce">
            404
          </div>
        </div>

        {/* Animated SVG Elements */}
        <div className="my-8 flex justify-center gap-4">
          <div className="w-16 h-16 bg-green-300 rounded-full animate-pulse shadow-lg" />
          <div className={`w-16 h-16 bg-green-400 rounded-full animate-spin shadow-lg`} style={{
            animationDuration: '3s'
          }} />
          <div className="w-16 h-16 bg-green-300 rounded-full animate-pulse shadow-lg animation-delay-2s" />
        </div>

        {/* Title */}
        <h1 className={`text-4xl md:text-5xl font-bold text-green-900 mb-4 transform transition-all duration-1000 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className={`text-lg md:text-xl text-green-800 mb-8 transform transition-all duration-1000 delay-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          The page you&apos;re looking for seems to have wandered off into the digital green. Let&lsquo;s get you back on track!
        </p>

        {/* Animated Links */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link href="/" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Back to Home
          </Link>
          <Link href="/about" className="px-8 py-3 bg-white hover:bg-green-50 text-green-600 font-semibold rounded-full shadow-lg border-2 border-green-300 transform hover:scale-105 transition-all duration-300">
            Explore About
          </Link>
        </div>

        {/* Footer Message */}
        <p className={`mt-12 text-sm text-green-700 transform transition-all duration-1000 delay-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          Error Code: 404 | Lost in the green space
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2s {
          animation-delay: 2s;
        }

        .animation-delay-4s {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
