import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup, signin } from "../../actions/user";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, navigate));
      clear();
    } else {
      dispatch(signin(form, navigate));
      clear();
    }
  };

  const clear = () => {
    setForm({ name: "", email: "", password:"" });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="p-4">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-4">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className='text-center text-5xl font-bold'>
              {isSignup ? "Sign Up" : "Sign In"}
            </h1>
            <form
              className="space-y-8 md:w-96 w-auto"
              action="#"
              onSubmit={handleSubmit}
            >
              {isSignup && (
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                    placeholder="FirstName LastName"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                    placeholder="name@example.com"
                    required
                />
              </div>

              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="shadow-sm bg-gray-200 text-black text-sm rounded-lg block p-2 w-full"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-600 "
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 hover:bg-primary-800"              
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <button onClick={() => setIsSignup(!isSignup)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign up"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
