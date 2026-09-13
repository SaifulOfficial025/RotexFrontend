import os
import re

# 1. Revert SliderNavBar.js
snb_path = 'app/(homePage)/slider/SliderNavBar.js'
with open(snb_path, 'r') as f:
    snb_content = f.read()

snb_content = snb_content.replace(
    '<div className="hidden">',
    '<div className="flex lg:hidden w-full">'
)

with open(snb_path, 'w') as f:
    f.write(snb_content)

# 2. Revert DynamicHeader.js
dh_path = 'app/components/dymanicHeader.js'
with open(dh_path, 'r') as f:
    dh_content = f.read()

if 'IoSearchOutline' not in dh_content:
    dh_content = dh_content.replace(
        'IoCartOutline,\n} from "react-icons/io5";',
        'IoCartOutline,\n  IoSearchOutline,\n} from "react-icons/io5";'
    )

search_block = """
              {/* Search Icon */}
              <button
                onClick={() => {
                  const searchInput =
                    document.getElementById("main-search-input");
                  if (searchInput) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    searchInput.focus({ preventScroll: true });
                  }
                }}
                className="group"
              >
                <IoSearchOutline
                  size={24}
                  className="group-hover:text-primary transition-colors"
                />
              </button>
"""

# If not already reverted
if '{/* Search Icon */}' not in dh_content:
    # Insert before {/* Cart Icon & Price */}
    dh_content = dh_content.replace(
        '{/* Cart Icon & Price */}',
        f'{search_block.strip()}\n\n              {{/* Cart Icon & Price */}}'
    )

with open(dh_path, 'w') as f:
    f.write(dh_content)

print("Reverted successfully.")
