import { useState } from "react";

function Login({ handeLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelFrom(e) {
    e.preventDefault();
    setPassword("");
    setEmail("");
    handeLogin(email, password);
  }

  function handeEmail(e) {
    setEmail(e.target.value);
  }

  function handelPassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="border-2 rounded-xl border-emerald-600 p-8  w-full max-w-md">
          <form
            onSubmit={(e) => {
              handelFrom(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              required
              onChange={(e) => handeEmail(e)}
              className="outline-none bg-transparent border-2 text-white px-8 py-3 text-lg border-emerald-600 rounded-full w-full sm:w-3/4"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => handelPassword(e)}
              required
              className="outline-none bg-transparent border-2 text-white px-8 py-3 text-lg mt-3 border-emerald-600 rounded-full w-full sm:w-3/4"
              type="password"
              placeholder="Enter password"
            />
            <button className="outline-none mt-7 bg-emerald-600 border-none text-white px-10 py-3 text-lg rounded-full w-full sm:w-1/2">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
