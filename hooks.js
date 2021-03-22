import { useContext,useState } from "react";
import { useRouter } from "next/router";
import useAxios from "axios-hooks";
// import Context from "./context";
import { axios } from "./plugins";
// import { API_ENDPOINT } from "./constants"; 


export const useAppAxiosExecute = ({
    method = "GET",
    url,
    contentType = "application/json",
    errorMessage = "予期せぬエラーが発生しました",
    }) => {
        const [data,setData] = useState(undefined);
        const [error,setError] = useState("");
        const [loading,setLoading] = useState(false);

        function excute(payload) {
            console.log(payload);
            return new Promise(async (resolve,_reject) => {
                setLoading(true);
            try {
                const headers = {
                    Authorization:
                    "Bearer" + 
                    (process.browser
                    ? window.localStorage.getItem("Fab_loop_token")
                    : ""),
                };
                let result;
                if(contentType === "multipart/form-data"){
                    result = await axios.post(url,payload,{
                        headers,
                    });
                } else {
                    result = await axios({
                        method,
                        url,
                        data:payload,
                        headers,
                    });
                }
                setData(result.data);
                resolve(result.data);
            } catch(e) {
                setError(errorMessage);
                setTimeout(() => {
                    setError("");
                },3000);
            } finally {
                setLoading(false);
            }
            });
        }
        return [
            {
                data,
                error,
                loading,
            },
            excute,
        ];
    };

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