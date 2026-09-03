import {
  MdDevices,
  MdCheckroom,
  MdHome,
  MdSportsSoccer,
  MdFaceRetouchingNatural,
  MdMenuBook,
  MdToys,
  MdPets,
  MdDirectionsCar,
  MdRestaurant,
  MdHealthAndSafety,
  MdBuild,
} from "react-icons/md";

// ─── Category Data ────────────────────────────────────────────────────────────
export const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <MdDevices size={20} />,
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Smart Watches",
      "Cameras",
      "Headphones",
      "Smart TVs",
      "Gaming Consoles",
    ],
  },
  {
    id: 2,
    name: "Fashion",
    icon: <MdCheckroom size={20} />,
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Fashion",
      "Footwear",
      "Bags & Wallets",
      "Jewellery",
      "Sunglasses",
      "Watches",
    ],
  },
  {
    id: 3,
    name: "Home & Garden",
    icon: <MdHome size={20} />,
    subcategories: [
      "Furniture",
      "Bedding",
      "Kitchen",
      "Lighting",
      "Garden Tools",
      "Storage",
      "Curtains",
      "Bath Accessories",
    ],
  },
  {
    id: 4,
    name: "Sports",
    icon: <MdSportsSoccer size={20} />,
    subcategories: [
      "Gym Equipment",
      "Outdoor Sports",
      "Cycling",
      "Swimming",
      "Yoga & Fitness",
      "Team Sports",
      "Climbing",
      "Running",
    ],
  },
  {
    id: 5,
    name: "Beauty",
    icon: <MdFaceRetouchingNatural size={20} />,
    subcategories: [
      "Skincare",
      "Haircare",
      "Makeup",
      "Fragrances",
      "Nail Care",
      "Men's Grooming",
      "Organic Products",
    ],
  },
  {
    id: 6,
    name: "Books",
    icon: <MdMenuBook size={20} />,
    subcategories: [
      "Fiction",
      "Non-Fiction",
      "Children's Books",
      "Textbooks",
      "Comics",
      "Self-Help",
      "Science",
      "Biographies",
    ],
  },
  {
    id: 7,
    name: "Toys & Games",
    icon: <MdToys size={20} />,
    subcategories: [
      "Action Figures",
      "Board Games",
      "Puzzles",
      "Educational Toys",
      "Remote Control",
      "Dollhouses",
      "Art Supplies",
    ],
  },
  {
    id: 8,
    name: "Pets",
    icon: <MdPets size={20} />,
    subcategories: [
      "Dog Supplies",
      "Cat Supplies",
      "Bird Supplies",
      "Fish & Aquatics",
      "Small Pets",
      "Pet Food",
      "Grooming",
    ],
  },
  {
    id: 9,
    name: "Automotive",
    icon: <MdDirectionsCar size={20} />,
    subcategories: [
      "Car Accessories",
      "Motorcycle",
      "Car Care",
      "Tools",
      "Tyres",
      "GPS & Navigation",
      "Seat Covers",
    ],
  },
  {
    id: 10,
    name: "Food & Grocery",
    icon: <MdRestaurant size={20} />,
    subcategories: [
      "Fresh Produce",
      "Dairy",
      "Snacks",
      "Beverages",
      "Organic",
      "Frozen Foods",
      "Bakery",
      "International",
    ],
  },
  {
    id: 11,
    name: "Health",
    icon: <MdHealthAndSafety size={20} />,
    subcategories: [
      "Vitamins",
      "Medical Devices",
      "Personal Care",
      "Wellness",
      "First Aid",
      "Weight Management",
    ],
  },
  {
    id: 12,
    name: "Tools & DIY",
    icon: <MdBuild size={20} />,
    subcategories: [
      "Power Tools",
      "Hand Tools",
      "Electrical",
      "Plumbing",
      "Painting",
      "Safety",
      "Measuring Tools",
    ],
  },
];

// ─── Slider Data ──────────────────────────────────────────────────────────────
export const sliderData = [
  {
    id: 1,
    title: "Next-Gen Smartwatches",
    description:
      "Track your fitness, stay connected, and elevate your style — all from your wrist. The future is on your arm.",
    price: "৳4,999",
    bgColor: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    logoText: "TechWear",
    logoColor: "text-cyan-400",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Premium Headphones",
    description:
      "Immersive 3D spatial audio with active noise cancellation. Silence the world. Hear every detail.",
    price: "৳7,500",
    bgColor: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    logoText: "SoundMax",
    logoColor: "text-purple-400",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mirrorless Camera",
    description:
      "Capture stunning 4K video and 45MP photos with pro-level autofocus. Create. Don't just capture.",
    price: "৳89,000",
    bgColor: "from-[#2d1b69] via-[#1a0533] to-[#11001c]",
    logoText: "PixelPro",
    logoColor: "text-pink-400",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    description:
      "Engineered for long hours. Lumbar support, breathable mesh, and adjustable armrests for peak comfort.",
    price: "৳15,200",
    bgColor: "from-[#134e5e] via-[#1a6b5e] to-[#71b280]",
    logoText: "ErgoSeat",
    logoColor: "text-emerald-300",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Ultra-Slim Laptop",
    description:
      "16-core performance in a feather-light chassis. Up to 24 hours battery life. Work from anywhere.",
    price: "৳1,10,000",
    bgColor: "from-[#373b44] via-[#2c3e50] to-[#1a1a2e]",
    logoText: "NovaTech",
    logoColor: "text-blue-300",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Pro Running Shoes",
    description:
      "Engineered with carbon-fibre plates and reactive foam. Break records, not your feet.",
    price: "৳8,750",
    bgColor: "from-[#f7971e] via-[#e05c1a] to-[#a0180d]",
    logoText: "SwiftRun",
    logoColor: "text-yellow-200",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "4K Smart Television",
    description:
      "OLED precision. Dolby Vision. 120Hz refresh rate. Transform your living room into a private cinema.",
    price: "৳55,000",
    bgColor: "from-[#1c1c1c] via-[#333] to-[#1c1c1c]",
    logoText: "VisionTV",
    logoColor: "text-red-400",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Luxury Skincare Set",
    description:
      "6-step regimen with hyaluronic acid, retinol, and vitamin C. Visible results in 14 days, guaranteed.",
    price: null,
    bgColor: "from-[#f8cdda] via-[#e8b8c5] to-[#d4a5b5]",
    logoText: "GlowLab",
    logoColor: "text-rose-800",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Smart Home Bundle",
    description:
      "One hub, every device. Control your lights, thermostat, security and appliances from one app.",
    price: "৳22,500",
    bgColor: "from-[#0d324d] via-[#1a5276] to-[#117a65]",
    logoText: "HomeSmart",
    logoColor: "text-teal-300",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Eco Yoga Collection",
    description:
      "Sustainable, toxin-free mats & gear crafted from natural rubber. Better for your body. Better for Earth.",
    price: "৳3,200",
    bgColor: "from-[#56ab2f] via-[#2d7d2a] to-[#0d4a1e]",
    logoText: "PureFlow",
    logoColor: "text-lime-300",
    image:
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Mechanical Keyboard",
    description:
      "Per-key RGB, hot-swappable switches, and aircraft-grade aluminium frame. Type in style.",
    price: "৳9,900",
    bgColor: "from-[#24243e] via-[#302b63] to-[#0f0c29]",
    logoText: "KeyForge",
    logoColor: "text-indigo-300",
    image:
      "https://images.unsplash.com/photo-1527814050087-379381547962?q=80&w=900&auto=format&fit=crop",
  },
];
