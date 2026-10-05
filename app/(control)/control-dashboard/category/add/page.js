import CategoryForm from '../category-form';

export const metadata = {
  title: "Add Category | Admin Dashboard",
  description: "Add a new category.",
};

export default function AddCategoryPage() {
  return (
    <div className="space-y-6">
      <CategoryForm />
    </div>
  );
}
