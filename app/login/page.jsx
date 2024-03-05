import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <main>
      <LoginForm />
    </main>
  );
}

export default Login;
