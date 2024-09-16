import { useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen  bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[75%] mx-auto text-center flex flex-col items-center ">
        <div className="text-red-500 text-6xl mb-4">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops!</h1>
        <p className="text-lg text-gray-600 mb-4">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-sm text-gray-500 italic">
          {error.statusText || error.message}
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
