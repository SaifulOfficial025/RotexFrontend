import re

with open('app/components/header.js', 'r') as f:
    content = f.read()

# Add imports
if 'import { useState }' not in content:
    content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { useState } from "react";\nimport Cart from "./Cart";')

# Add state
if 'const [isCartOpen, setIsCartOpen]' not in content:
    content = content.replace('export default function Header() {', 'export default function Header() {\n  const [isCartOpen, setIsCartOpen] = useState(false);')

# Modify Cart Link to button
cart_link_pattern = r'\{\/\* Cart \*\/\}\s*<Link\s*href="#"\s*className="flex items-center space-x-2 lg:space-x-3 group"\s*>'
cart_btn_replacement = r'{/* Cart */}\n              <button\n                onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }}\n                className="flex items-center space-x-2 lg:space-x-3 group"\n              >'

content = re.sub(cart_link_pattern, cart_btn_replacement, content)

# Change closing tag of that specific block from </Link> to </button>
# The structure is:
# <button ...>
#   <div className="relative">...</div>
#   <span className="text-sm font-bold text-gray-800">৳0.00</span>
# </button>
# Since it's exactly one </Link> after the cart block before the next </div>, we can find it.
# Let's replace the first </Link> after text-gray-800">৳0.00</span>
content = re.sub(r'(<span className="text-sm font-bold text-gray-800">৳0\.00</span>\s*)</Link>', r'\1</button>', content)

# Inject Cart component at the end
if '<Cart isOpen={isCartOpen}' not in content:
    content = content.replace('</header>', '  <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />\n    </header>')

with open('app/components/header.js', 'w') as f:
    f.write(content)

print("Header updated successfully.")
