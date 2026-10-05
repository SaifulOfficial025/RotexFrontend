import ProductDetailsHomePage from "../(productDetails)/ProductDetailsHomePage";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const productName = decodeURIComponent(resolvedParams.productName).replace(/-/g, " ");
  const capitalizedName = productName.charAt(0).toUpperCase() + productName.slice(1);
  
  return {
    title: `${capitalizedName} | Rotex Lab - Premium Equipment`,
    description: `Discover detailed specifications, features, and information about ${capitalizedName} by Rotex Lab. High quality laboratory and medical equipment.`,
    keywords: [capitalizedName, "Rotex Lab", "Laboratory Equipment", "Medical Devices", "Specifications"],
    openGraph: {
      title: `${capitalizedName} | Rotex Lab`,
      description: `Discover detailed specifications, features, and information about ${capitalizedName} by Rotex Lab.`,
    },
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  return (
    <>
      <h1 className="sr-only">
        {decodeURIComponent(resolvedParams.productName).replace(/-/g, " ")} - Rotex Lab
      </h1>
      <ProductDetailsHomePage />
    </>
  );
}
