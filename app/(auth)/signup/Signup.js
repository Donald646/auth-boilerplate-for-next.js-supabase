import { signup } from "../actions";

export default function SignUpPage() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <p className="text-5xl mb-10">Coeus</p>
      <form className="flex flex-col justify-center w-1/5 gap-2 items-center">
        <div className="w-full">
          <label htmlFor="email" className="block text-left">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border-2 border-white rounded h-10 w-full"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block text-left">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="border-2 border-white rounded h-10 w-full"
            required
          />
        </div>

        <button
          formAction={signup}
          className="border-2 rounded-lg mt-3 w-1/2 items-center p-1"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
