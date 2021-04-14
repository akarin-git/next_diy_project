import { API_ENDPOINT } from "../constants";
import fetch from 'node-fetch';

// 全体のpostdata
export async function getAllPostsData(){
    const res = await fetch(new URL(`${API_ENDPOINT}/api/image/showall`));
    const posts = await res.json();
    return posts;
}


// それぞれのpath取得
export async function getAllPostIds(){
    const res = await fetch(new URL(`${API_ENDPOINT}/api/image/showall`));
    const posts = await res.json();
    return posts.map((post) => {
    // console.log(post.id);
        return{
            params:{
                id:String(post.id)
                // id:post.id
            },
        };
    });
}

// 一つのpostdata
export async function getPostData(id){
    // console.log(id);
    const res = await fetch(new URL(`${API_ENDPOINT}/api/image/show/${id}`));
    const post = await res.json();
    // console.log(post[0]);
    return{
        post,
    };
}

// カテゴリhandmade
export async function getCategoryHandmade(){
    const res = await fetch(new URL(`${API_ENDPOINT}/api/image/handmade`));
    const posts = await res.json();
    return posts;
}
// カテゴリhandmade
export async function getCategoryCraft(){
    const res = await fetch(new URL(`${API_ENDPOINT}/api/image/craft`));
    const posts = await res.json();
    return posts;
}