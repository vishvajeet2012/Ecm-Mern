import { useState } from "react";

function Login({handeLogin}) {
  console.log(handeLogin)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelFrom(e) {
    e.preventDefault();
    setPassword("");
    setEmail("");
    handeLogin(email,password)
  }

  function handeEmail(e) {
    setEmail(e.target.value);
  }

  function handelPassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-emerald-600 p-20">
          <form
            onSubmit={(e) => {
              handelFrom(e);
            }}
            className=" flex flex-col items-center justify-center"
          >
            <input
              value={email}
              required
              onChange={(e) => handeEmail(e)}
              className="outline-none bg-transparent border-2 text-white px-10 py-4 text-xl border-emerald-600 rounded-full"
              type="email"
              placeholder="enter your email"
            />
            <input
              value={password}
              onChange={(e) => handelPassword(e)}
              required
              className="outline-none  bg-transparent border-2 text-white px-10 py-4 text-xl mt-3 border-emerald-600 rounded-full"
              type="password"
              placeholder="enter password"
            />
            <button className="outline-none mt-7 bg-emerald-600 border-none text-white px-20 py-3 text-xl rounded-full  ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
