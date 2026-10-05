import BrandForm from '../brand-form';

export const metadata = {
  title: "Add Brand | Admin Dashboard",
  description: "Add a new brand.",
};

export default function AddBrandPage() {
  return (
    <div className="space-y-6">
      <BrandForm />
    </div>
  );
}
