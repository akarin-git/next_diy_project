import React from 'react'
import SignupForm from '../components/SignupForm';
import PostForm from '../components/PostForm';
import { useAppContext,useAppAxios,useAppAxiosExecute,useAppRouter } from "../hooks";

export default function form() {
    const [router, { needAuth }] = useAppRouter();

     const [{loading,error},upload] = useAppAxiosExecute({
        method:"POST",
        url:"/api/image",
        errorMessage:"エラー",
    })

    const submit = async({
    title,category,web_page,descriptionA,descriptionB,
            descriptionC,materialA,materialB,materialC,
            amountA,amountB,amountC,goodsA,goodsB,goodsC
    }) => {
        console.log('post');
        await upload({
        title,category,web_page,descriptionA,descriptionB,
            descriptionC,materialA,materialB,materialC,
            amountA,amountB,amountC,goodsA,goodsB,goodsC
            });
    router.push("/recipe");
        };
    return (
        <div>
            <PostForm 
            onSubmit={submit}
        />
        </div>
    )
}
