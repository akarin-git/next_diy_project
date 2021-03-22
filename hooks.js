import { useContext,useState } from "react";
import { useRouter } from "next/router";
import useAxios from "axios-hooks";


export const useAppAxiosExecute = ({
    method = "GET",
    url,
    contentType = "application/json",
    errorMessage = "予期せぬエラーが発生しました",
    }) => {
        const [data,setData] = useState(undefined);
        const [error,setError] = useState("");
        
        function execute(payload) {
            console.log(payload);
            
        }
    }

export const useAppRouter = () => {
    const router = useRouter();
    return [
        router,
        {
            needAuth:
            router.route !== "/" &&
            router.route !== "/signup" &&
            router.route !== "/signin",
        },
    ];
};