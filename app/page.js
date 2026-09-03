import HomePage from "./(homePage)/homePage";

// SEO best practices: Metadata must be exported from the actual page.js route file
export const metadata = {
  title: "Home Page - Rotex International",
  description:
    "Welcome to the Rotex International home page. Discover our latest products and exclusive collections.",
};

export default function Page() {
  return <HomePage />;
}
