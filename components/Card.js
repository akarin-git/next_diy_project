import Link from 'next/link';

export default function Card({post}) {
    return (
        <div>
            <ul>
            <Link href={`/recipe/${post.id}`}>
            <div>
            <p>{post.title}</p>
            <p>{post.favorite.length}</p>
            </div>
           
            </Link>
            </ul>
        </div>
    );
}
