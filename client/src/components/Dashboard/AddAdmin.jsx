import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signup } from "../../actions/user";

const initialState = {
  name: "",
  email: "",
  password: "",
  isAuthorized: true,
};

const AddAdmin = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signup(form));
    clear();
  };

  const clear = () => {
    setForm({ name: "", email: "", password: "", isAuthorized: true });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="p-4">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-4">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-5xl font-bold">Add New Admin</h1>
            <form
              className="space-y-8 md:w-96 w-auto"
              action="#"
              onSubmit={handleSubmit}
            >
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

              <button
                type="submit"
                className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 hover:text-black"
              >
                Add Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAdmin;
