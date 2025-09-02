import ProductCard from "@/components/product-card/product-card";

interface ResponseProps {
  products: []
}

export default async function Home(){

  const response = await fetch("https://dummyjson.com/products/")
  const { products }: ResponseProps = await response.json()

  return (
    <div id={"products"}>
      <div className="grid grid-cols-6 gap-4">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};