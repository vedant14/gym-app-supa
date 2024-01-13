import { userRegisterWithGithub } from "actions/register";

export default function SignIn() {
  return (
    <div>
      <div>Sign in with github</div>
      <button onClick={userRegisterWithGithub}>Sign In</button>
    </div>
  );
}
