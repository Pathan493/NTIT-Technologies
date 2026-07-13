import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="w-1/2 bg-blue-900 flex justify-center items-center">
        <img
          src={logo}
          alt="NTIT Technologies"
          className="w-96"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center bg-white">

        <div className="w-[420px]">

          <h1 className="text-5xl font-bold text-blue-900 mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Login to your NTIT account
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-3"
          />

          {/* Forgot Password */}

          <div className="text-right mb-5">

            <Link
              to="/forgot-password"
              className="text-blue-700 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg">

            Login

          </button>

          {/* Register */}

          <div className="text-center mt-6">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;