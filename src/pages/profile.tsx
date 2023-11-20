import { getSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = getSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user.name}!</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
