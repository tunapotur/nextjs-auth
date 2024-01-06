import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";

async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <RegisterForm />;
}

export default RegisterPage;
