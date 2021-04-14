import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container
} from "@chakra-ui/react";
import Link from 'next/link';

export default function CBread({post}) {
  // console.log(post);
    return (
      <>
        <div className="container">
        
          <Breadcrumb fontWeight="solid" fontSize="md" color="gray.500">
            <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                    <BreadcrumbLink href="/recipe">Recipe</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                    <Link href={`/category/${post[0].category}`}>{post[0].category}</Link>
            </BreadcrumbItem>
         </Breadcrumb>  
        <style JSX>
        {`
            .container{
                width:100%;
                padding:20px;
                padding-left:30px;
            }
        `}
        </style>
        </div>
        </>
    )
}
