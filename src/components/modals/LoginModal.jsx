"use client";
import Link from "next/link";
import { X } from "lucide-react"; 

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all">
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition text-gray-500"
        >
            <X size={20} />
        </button>

        {/* Content */}
        <div className="p-8 mt-5 text-center">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Welcome to Airbnb</h2>
          <p className="text-gray-600 mb-8 px-4">
            Log in to save your favorite homes and see personalized recommendations.
          </p>
          
          <div className="space-y-3">
              <Link 
                href="/auth/signin"
                onClick={onClose}
                className="block w-full py-3 bg-rose-600 hover:bg-rose-700 text-white text-center font-semibold rounded-xl transition shadow-md"
              >
                Go to Login
              </Link>
              
              <button 
                onClick={onClose}
                className="w-full py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition"
              >
                Maybe later
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;