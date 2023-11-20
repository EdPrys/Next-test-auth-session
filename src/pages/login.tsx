import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() =>
          signIn("credentials", {
            username: "your_username",
            password: "your_password",
          })
        }
      >
        Sign in
      </button>
    </div>
  );
}
