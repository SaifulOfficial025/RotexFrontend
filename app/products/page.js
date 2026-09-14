import ProductHomepage from "./ProductHomepage";

export const metadata = {
  title: "Products | Rotex Lab - Premium Scientific Equipment",
  description:
    "Explore our complete catalog of premium laboratory equipment, scientific instruments, medical devices, and industrial weighing systems.",
  keywords: [
    "Products",
    "Rotex Lab",
    "Laboratory Equipment",
    "Scientific Instruments",
    "Medical Devices",
    "Industrial Machinery",
  ],
  openGraph: {
    title: "Our Products | Rotex Lab",
    description:
      "Explore our complete catalog of premium laboratory equipment and scientific instruments.",
    url: "https://rotexbd.com/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <h1 className="sr-only">
        Our Products - Rotex Lab Laboratory and Medical Equipment
      </h1>
      <ProductHomepage />
    </>
  );
}
