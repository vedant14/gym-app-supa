import { getGymSessions } from "actions/gym-sessions";
import { useAuth } from "hooks/auth";
import Link from "next/link";

export default function Home() {
  const { user, signOut } = useAuth();
  async function getSessions() {
    const data = await getGymSessions(user.id);
    console.log(data);
  }
  return (
    <div>
      <div className="grid">
        <p>get all session data</p>
        <div>
          <button onClick={getSessions}>Hey Front end</button>
        </div>
        <div>
          <button onClick={signOut}>Logout</button>
        </div>
        <div>
          <Link href="/auth/sign-in">SignIn</Link>
        </div>
      </div>
    </div>
  );
}
