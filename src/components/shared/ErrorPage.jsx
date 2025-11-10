import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fc] px-4">
      <div className="bg-white text-center shadow-xl rounded-2xl p-10 max-w-md w-full">
        <div className="text-red-500 text-6xl flex justify-center mb-4">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#2c3e57] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1f2d40] focus:outline-none focus:ring-2 focus:ring-[#2c3e57] transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
