export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We are a family-owned business based in the heart of the city. Our
              mission is to provide the best quality products to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Product Design</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              123 Main St, Anytown, USA
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              +1 (123) 456-7890
            </p>
            <p className="text-gray-600 dark:text-gray-400">[EMAIL_ADDRESS]</p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-200 dark:border-gray-800 pt-4">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
