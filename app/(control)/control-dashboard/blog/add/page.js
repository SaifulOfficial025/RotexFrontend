import BlogForm from '../blog-form';

export const metadata = {
  title: "Add Blog | Admin Dashboard",
  description: "Publish a new blog post.",
};

export default function AddBlogPage() {
  return (
    <div className="space-y-6">
      <BlogForm />
    </div>
  );
}
