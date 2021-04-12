import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container
} from "@chakra-ui/react";
import Link from 'next/link';

export default function Bread() {
    return (
         <div className="container">
        
          <Breadcrumb fontWeight="solid" fontSize="md" >
            <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                    <Link href={`/recipe`}>Recipe</Link>
            </BreadcrumbItem>
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
