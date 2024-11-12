import Link from "next/link";
import FormLogin from "./components/login/formlogin";

export default function Index() {
  return (
    <div className="page-container">
      <FormLogin />
      <Link href="/pages/home">Ingresar</Link>
    </div>
  );
}
