import '../styles/globals.scss'
import { useReducer, useEffect } from "react";
import { useAppAxiosExecute,useAppRouter } from "../hooks";
import { setUser } from "../state/actions";
import Context from "../context";
import { reducer, initialState } from "../state/reducer";

function MyApp({ Component, pageProps }) {
    const [router, { needAuth }] = useAppRouter();
  const [state,dispatch] = useReducer(reducer,initialState);
  const [{ data: user }, fetchUser] = useAppAxiosExecute({
    url: "/api/me",
  });
  console.log({data:user});

  useEffect(() => {
    if (process.browser && needAuth) {
      // console.log(process.browser)
      if (!window.localStorage.getItem("Fab_loop_token")) {
        router.replace("/signin");
      } else {
        fetchUser();
        }
       }
    }, [router]);

  useEffect(() => {
    if(user){
      dispatch(setUser(user));
    }
  }, [dispatch,setUser,user]);

   return (
      <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
   <Component {...pageProps}/> 
   </Context.Provider>
   );
}

export default MyApp
