import Input from '../components/Base/Input';
import FileInput from '../components/Base/FileInput';
import Button from '../components/Base/Button';
import { useState } from "react";
// import { MDBFileInput } from "mdbreact";

export default function PostForm({onSubmit}) {
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [web_page,setWebPage] = useState("");
    const [image_path,setImagePath] = useState("");
    const [descriptionA,setDescriptionA] = useState("");
    const [descriptionB,setDescriptionB] = useState("");
    const [descriptionC,setDescriptionC] = useState("");
    const [materialA,setMaterialA] = useState("");
    const [materialB,setMaterialB] = useState("");
    const [materialC,setMaterialC] = useState("");
    const [amountA,setAmountA] = useState("");
    const [amountB,setAmountB] = useState("");
    const [amountC,setAmountC] = useState("");
    const [goodsA,setGoodsA] = useState("");
    const [goodsB,setGoodsB] = useState("");
    const [goodsC,setGoodsC] = useState("");

     const handleChange = (e) => {
        //  console.log(e.target.files[0]);
        //  setImagePath(e.target.files[0]);
        // console.log(files[0]);
        setImagePath(e.target.files[0]);
  };

     const submit = (e) => {
        e.preventDefault();
        onSubmit({
            title,category,web_page,descriptionA,descriptionB,
            descriptionC,materialA,materialB,materialC,
            amountA,amountB,amountC,goodsA,goodsB,goodsC,image_path
         });
    }
    
    return (
             <form onSubmit={submit}>
            <Input
                value={title}
                placeholder="title"
                type="text"
                onChange={setTitle}
            />
             <Input
                value={category}
                placeholder="category"
                type="text"
                onChange={setCategory}
            />
             <Input
                value={web_page}
                placeholder="web"
                type="text"
                onChange={setWebPage}
            />
             <Input
                value={descriptionA}
                placeholder="説明１"
                type="text"
                onChange={setDescriptionA}
            />
             <Input
                value={descriptionB}
                placeholder="説明２"
                type="text"
                onChange={setDescriptionB}
            />
             <Input
                value={descriptionC}
                placeholder="説明３"
                type="text"
                onChange={setDescriptionC}
            />
             <Input
                value={materialA}
                placeholder="材料１"
                type="text"
                onChange={setMaterialA}
            />
             <Input
                value={materialB}
                placeholder="材料２"
                type="text"
                onChange={setMaterialB}
            />
             <Input
                value={materialC}
                placeholder="材料３"
                type="text"
                onChange={setMaterialC}
            />
             <Input
                value={amountA}
                placeholder="量１"
                type="text"
                onChange={setAmountA}
            />
             <Input
                value={amountB}
                placeholder="量２"
                type="text"
                onChange={setAmountB}
            />
             <Input
                value={amountC}
                placeholder="量３"
                type="text"
                onChange={setAmountC}
            />
             <Input
                value={goodsA}
                placeholder="道具１"
                type="text"
                onChange={setGoodsA}
            />
             <Input
                value={goodsB}
                placeholder="道具２"
                type="text"
                onChange={setGoodsB}
            />
             <Input
                value={goodsC}
                placeholder="道具３"
                type="text"
                onChange={setGoodsC}
            />
              <input
                // multiple
                accept="image/*"
                placeholder="画像"
                type="file"
                onChange={handleChange}
            />
             {/* <img src={imageUrl} alt="uploaded" /> */}
            <Button className="mts">
            送信
            </Button>
        </form>
    )
}
