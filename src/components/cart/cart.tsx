import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { InputNumber } from "../ui/input-number";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductType {
  thumbnail: string,
  title: string,
  price: string
}

interface ResponseProps {
  products: Array<ProductType>
}

export async function Cart(){

  const response = await fetch("https://dummyjson.com/carts/13")
  const { products }: ResponseProps = await response.json()

  return(
    <Sheet>
      <SheetTrigger className="float-right">Cart</SheetTrigger>
      <SheetContent className="min-w-110 gap-0">
        <SheetHeader className="mb-4">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Add all items to your cart before completing your purchase.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="overflow-auto h-full">
          <div className="grid gap-4 px-4">
            {products.map((product: ProductType, i: number) => 
              <Card className="p-2" key={i}>
                <CardContent className="p-2">
                  <div className="grid grid-cols-9 gap-2">
                    <div className="col-span-2">
                      <Image src={product.thumbnail} width={150} height={150} alt={'thumbnail'} priority/>
                    </div>
                    <div className="col-span-4">
                      <div>
                        <span className="text-slate-700 text-md font-medium">{product.title}</span>
                      </div>
                      <div>
                        <Button className="text-slate-500 font-medium p-0" variant="link">Remove</Button>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="mb-2">
                        <InputNumber/>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium text-sm">Price: ${product.price}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </ScrollArea>
        <SheetFooter className="border-t-1">
          <Button type="submit">Finish Purchase</Button>
          <SheetClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}