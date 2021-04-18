import { 
        Container
} from "@chakra-ui/react";
import PostRecipeForm from '../components/PostRecipeForm'
import { useAppContext,useAppAxios,useAppAxiosExecute,useAppRouter } from "../hooks";
import { upPost } from "../state/actions";


export default function PostForm() {
     const [router, { needAuth }] = useAppRouter();

     const [{loading,error},upload] = useAppAxiosExecute({
        method:"POST",
        url:"/api/image",
        contentType: "multipart/form-data",
        errorMessage:"エラー",
    });

    const submit = ({
        category,title,subtitle,
        web_page,image_path,step,hour,comment,difficult,
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
         submitData.append("comment", comment),
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
        
        router.push("/recipe");
};
    
    return (
        <Container>

            <PostRecipeForm
             onSubmit={submit}
             isSending={loading}
             />
        {error && <p className="error">{error}</p>}

        </Container>
    )
}

     