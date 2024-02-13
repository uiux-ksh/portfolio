import Main from "@/app/_component/page/(beforeLogin)/Main";
import {auth} from "@/auth";
import {redirect} from "next/navigation";


export default async function  Home() {
    const session = await auth();
    if (session?.user) {
        redirect('/home');
        return null;
    }
  return (
    <>
      <Main/>
    </>
  )
}
