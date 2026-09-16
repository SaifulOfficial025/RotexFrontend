import ProductDetailsHomePage from "../(productDetails)/ProductDetailsHomePage";

// This is the dynamic route handler for /products/[productName]
export default function ProductPage({ params }) {
  // In a real app, you would fetch product data using params.productName
  // For now, we render the static homepage layout
  return <ProductDetailsHomePage />;
}
