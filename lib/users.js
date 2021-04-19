import { API_ENDPOINT } from "../constants";
import fetch from 'node-fetch';
import useSWR from "swr";
import { createFetcher } from "./_fetcher";

// それぞれのuserpath取得
export async function getAllUserIds(){
    const res = await fetch(new URL(`${API_ENDPOINT}/api/userall`));
    const users = await res.json();
    return users.map((user) => {
    // console.log(user.id);
        return{
            params:{
                id:String(user.id)
            },
        };
    });
}

// 一人のuserdata
export default function useMe() {
  const { data, mutate, error } = useSWR("/api/me", createFetcher(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
  const loading = !data && !error;
  const loggedOut = error && error.message.match(/401/);

  return {
    loading,
    loggedOut,
    error,
    me: data,
    refreshMe: mutate,
  };
}

// me情報
export async function getMeData(){
    // console.log(id);
    const res = await fetch(new URL(`${API_ENDPOINT}/api/me`));
    const me = await res.json();
    console.log(res);
    return{
        me,
    };
}