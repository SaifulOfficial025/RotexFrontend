import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Home & Garden", image: "https://images.unsplash.com/photo-1416879573089-13042ccb3a0c?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=400&auto=format&fit=crop" },
];

export default function Categories() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wide">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link href="#" key={cat.id} className="group relative h-48 rounded-sm overflow-hidden flex items-center justify-center bg-gray-100">
            <Image 
              src={cat.image} 
              alt={cat.name} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <span className="relative z-10 text-white font-semibold text-lg tracking-wider uppercase">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
