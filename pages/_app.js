// UI lib *chakura *motion
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools";

import '../styles/globals.scss'
import { useReducer, useEffect } from "react";
import { useAppAxiosExecute,useAppRouter } from "../hooks";
import { setUser } from "../state/actions";
import Context from "../context";
import { reducer, initialState } from "../state/reducer";

// chakura color
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
// chakura responcive
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});


function MyApp({ Component, pageProps }) {
  const [router, { needAuth }] = useAppRouter();
  const [state,dispatch] = useReducer(reducer,initialState);


  const [{ data: user }, fetchUser] = useAppAxiosExecute({
    url: "/api/me",
  });
  // console.log(user);

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
      <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
      <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
   <Component {...pageProps}/> 
   </Context.Provider>
   </AnimatePresence>
   </ChakraProvider>
   );
}

export default MyApp
