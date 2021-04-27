import { Container,Button,Icon,Text } from "@chakra-ui/react";
import PostRecipeForm from '../components/PostRecipeForm'
import { useAppContext,useAppAxios,useAppAxiosExecute,useAppRouter } from "../hooks";
import { upPost } from "../state/actions";
import { HiChevronLeft } from "react-icons/hi";

import Link from 'next/link';



export default function PostForm() {
     const [router, { needAuth }] = useAppRouter();

     const [{loading,error},upload] = useAppAxiosExecute({
        method:"POST",
        url:"/api/image",
        contentType: "multipart/form-data",
        errorMessage:"未入力エラーです",
    });

    const submit = ({
        category,title,subtitle,
        web_page,image_path,step,hour,difficult,
        descriptionA,descriptionB,
        descriptionC,descriptionD,descriptionE,
        materialA,materialB,materialC,materialD,materialE,
        maAnum,maBnum,maCnum,maDnum,maEnum,
        goodsA,goodsB,goodsC,goodsD,goodsE,
        goAnum,goBnum,goCnum,goDnum,goEnum
    }) => {
    // console.log("post");
    const submitData = new FormData();
         submitData.append("category", category),
         submitData.append("title", title),
         submitData.append("subtitle", subtitle),
         submitData.append("web_page", web_page),
         submitData.append("image_path", image_path),
         submitData.append("step", step),
         submitData.append("hour", hour),
         submitData.append("difficult", difficult),
         submitData.append("descriptionA", descriptionA),
         submitData.append("descriptionB", descriptionB),
         submitData.append("descriptionC", descriptionC),
         submitData.append("descriptionD", descriptionD),
         submitData.append("descriptionE", descriptionE),
         submitData.append("materialA", materialA),
         submitData.append("materialB", materialB),
         submitData.append("materialC", materialC),
         submitData.append("materialD", materialD),
         submitData.append("materialE", materialE),
         submitData.append("maAnum", maAnum),
         submitData.append("maBnum", maBnum),
         submitData.append("maCnum", maCnum),
         submitData.append("maDnum", maDnum),
         submitData.append("maEnum", maEnum),
         submitData.append("goodsA", goodsA),
         submitData.append("goodsB", goodsB),
         submitData.append("goodsC", goodsC),
         submitData.append("goodsD", goodsD),
         submitData.append("goodsE", goodsE),
        //  submitData.append("goods", goAnum),
         upload(submitData);
        if(!error){
        router.push("/recipe");
        }
};
    
    return (
        <>
        {/* 戻る */}
        <Link href={`/recipe`}>
            <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Text>back</Text>
            </Button>
        </Link>

        <Container>
            {/* Form */}
            <PostRecipeForm
             onSubmit={submit}
             isSending={loading}
             error={error}
             />
        {error && <p className="error">{error}</p>}

        </Container>

         <Link href={`/recipe`}>
            <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Text>back</Text>
            </Button>
        </Link>
        </>
    )
}

     