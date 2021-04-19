import { useAppContext, useAppRouter } from "../../hooks";
import localStorage from "store2";
import useMe from "../../lib/users";
// import { useAppRouter } from "../../hooks";



export default function index() {
//  const [router] = useAppRouter();
  const { me, refreshMe } = useMe();
  console.log(me);
  
    return (
        <div>
          hi
        </div>
    )
}

