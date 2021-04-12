import React from 'react'
import SignupForm from '../components/SignupForm';
import PostForm from '../components/PostForm';
import { upPost } from "../state/actions";
import { useEffect } from 'react';
import { useAppContext,useAppAxios,useAppAxiosExecute,useAppRouter } from "../hooks";

export default function form() {
    const [router, { needAuth }] = useAppRouter();

     const [{loading,error},upload] = useAppAxiosExecute({
        method:"POST",
        url:"/api/image",
        contentType: "multipart/form-data",
        errorMessage:"エラー",
    });

    const submit = ({
            title,category,web_page,descriptionA,descriptionB,
            descriptionC,materialA,materialB,materialC,
            amountA,amountB,amountC,goodsA,goodsB,goodsC,image_path
    }) => {
        // await({
        //     title,category,web_page,descriptionA,descriptionB,
        //     descriptionC,materialA,materialB,materialC,
        //     amountA,amountB,amountC,goodsA,goodsB,goodsC,image_path
        // });
        const submitData = new FormData();
         submitData.append("title", title),
         submitData.append("category", category),
         submitData.append("web_page", web_page),
         submitData.append("descriptionA", descriptionA),
         submitData.append("descriptionB", descriptionB),
         submitData.append("descriptionC", descriptionC),
         submitData.append("materialA", materialA),
         submitData.append("materialB", materialB),
         submitData.append("materialC", materialC),
         submitData.append("amountA", amountA),
         submitData.append("amountB", amountB),
         submitData.append("amountC", amountC),
         submitData.append("goodsA", goodsA),
         submitData.append("goodsB", goodsB),
         submitData.append("goodsC", goodsC),
         submitData.append("image_path", image_path),
         upload(submitData);
        
        router.push("/recipe");
        };
  

    return (
        <div>
            <PostForm 
            onSubmit={submit}
            isSending={loading}
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}
