import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

function ProductCard({ product }: any) {
  return(
    <Card>
      <CardHeader>
        {product.discountPercentage > 10 &&
          <Badge className="absolute font-medium text-slate-700" variant={"outline"}>
            -{product.discountPercentage}%
          </Badge>
        }
        <Image src={product.thumbnail} alt="Placeholder" width={256} height={256} priority/>
        <CardTitle className="h-10 text-ellipsis line-clamp-2 ">
          <div className="text-md text-slate-500 leading-5 font-medium">{product.title}</div>
        </CardTitle>
        <CardDescription>
          <span className="text-slate-700 text-xl font-semibold">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</span>
          <span className="text-md font-semibold px-2"><del>${product.price}</del></span>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={'/product/' + product.id} className="w-full">
          <Button variant={"outline"} className="w-full">Purchase</Button>
        </a>
      </CardFooter>
    </Card>
  )
};
export default ProductCard;