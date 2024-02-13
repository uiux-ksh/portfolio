import {redirect} from "next/navigation";
import {auth} from "@/auth";

async  function  Login() {
    const session = await auth();
    if (session?.user) {
        redirect('/home');
        return null;
    }
    redirect('/i/flow/login');
}
export default Login;