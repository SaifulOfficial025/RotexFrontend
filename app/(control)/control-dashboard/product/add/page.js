
import ProductForm from '../product-form';

export const metadata = {
  title: "Add Product | Admin Dashboard",
  description: "Add a new product to the catalog.",
};

export default function AddProductPage() {
  return (
    <div className="space-y-6">
      <ProductForm />
    </div>
  );
}
