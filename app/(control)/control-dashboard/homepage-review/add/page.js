import HomepageReviewForm from '../homepage-review-form';

export const metadata = {
  title: "Add Homepage Review | Admin Dashboard",
  description: "Add a review for the homepage.",
};

export default function AddHomepageReviewPage() {
  return (
    <div className="space-y-6">
      <HomepageReviewForm />
    </div>
  );
}
