import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Reviews, ReviewType } from "@/components/reviews/reviews"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import Image from "next/image"

interface ProductType {
  title: string,
  description: string,
  price: number,
  images: Array<string>,
  reviews: Array<ReviewType>,
  discountPercentage: number,
  rating: number,
  category: string
}

export default async function Home({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const response = await fetch("https://dummyjson.com/product/" + id)
  const product: ProductType = await response.json()

  return(
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Card>
          <CardContent className="flex justify-center items-center">
            <Image className="max-w-6/10" src={product.images[0]} alt="Placeholder" width={720} height={720} priority/>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 sticky top-4">
        <Card>
          <CardContent>
            <div className="text-slate-500">{product.category}</div>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              {product.title}
            </h2>
            <div>
              <Rating value={product.rating}/>
              <span className="m-2">{product.rating}</span>
              <span className="text-slate-500">- {product.reviews.length} Reviews</span>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {product.description}
            </p>
          </CardContent>
          <CardFooter>
            <div className="w-full grid gap-4">
              <div>
                <span className="text-3xl font-bold">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</span>
                <span className="text-2xl text-slate-500 font-bold px-4"><del>${product.price}</del></span>
                <Badge className="font-semibold" variant={"outline"}>-{product.discountPercentage}%</Badge>
              </div>
              <Button className="w-full">Purchase</Button>
              <Button variant={"outline"} className="w-full">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reviews ({product.reviews.length})</CardTitle>
            <CardDescription>What our customers are saying</CardDescription>
          </CardHeader>
          <CardContent>
            <Reviews reviews={product.reviews} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
};