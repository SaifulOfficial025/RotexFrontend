import FeaturedProductForm from '../featured-product-form';

export const metadata = {
  title: "Add Featured Product | Admin Dashboard",
  description: "Feature a product.",
};

export default function AddFeaturedProductPage() {
  return (
    <div className="space-y-6">
      <FeaturedProductForm />
    </div>
  );
}
