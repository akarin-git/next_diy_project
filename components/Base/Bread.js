import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container
} from "@chakra-ui/react";
import Link from 'next/link';

export default function Bread({category}) {
    console.log(category)
    return (
         <div className="container">
        
          <Breadcrumb fontWeight="solid" fontSize="md" color="gray.500">
            <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                    <Link href={`/recipe`}>Recipe</Link>
            </BreadcrumbItem>

            {category ? (
            <BreadcrumbItem>
                    <Link href={`/category/${category}`}>{category}</Link>
            </BreadcrumbItem>
            ) : (
                 <></>
            )}
          
         </Breadcrumb>  
        <style JSX>
        {`
            .container{
                width:100%;
                // background:pink;
                padding:20px;
                padding-left:30px;
            }
        `}
        </style>
        </div>
    )
}
