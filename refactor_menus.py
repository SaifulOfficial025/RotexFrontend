import re

# 1. Update SliderNavBar.js
snb_path = 'app/(homePage)/slider/SliderNavBar.js'
with open(snb_path, 'r') as f:
    snb = f.read()

snb = snb.replace('import { categories } from "./sliderData";', 'import { categories, menus } from "@/app/components/CategoriesAndMenus";')

# Desktop links
desktop_links_pattern = r'\{/\* Desktop: Nav Links \*/\}[\s\S]*?</div>'
desktop_links_replacement = """{/* Desktop: Nav Links */}
        <div className="hidden lg:flex flex-1 items-center px-4 space-x-2">
          {menus.map((item, i) => (
            <Link key={i} href={item.href} className={`text-[13px] font-bold px-4 py-4 whitespace-nowrap transition-colors uppercase tracking-wide hover:bg-primary hover:text-white ${item.active ? "text-primary" : "text-gray-800"}`}>
              {item.label}
            </Link>
          ))}
        </div>"""
snb = re.sub(desktop_links_pattern, desktop_links_replacement, snb)

# Mobile links array replacement
mobile_links_pattern = r'\[\s*\{\s*href:\s*"/",\s*label:\s*"Home",\s*active:\s*true\s*\},[\s\S]*?\]\.map'
snb = re.sub(mobile_links_pattern, 'menus.map', snb)

with open(snb_path, 'w') as f:
    f.write(snb)

# 2. Update CategoryPanel.js
cp_path = 'app/(homePage)/slider/CategoryPanel.js'
with open(cp_path, 'r') as f:
    cp = f.read()

cp = cp.replace('import { categories } from "./sliderData";', 'import { categories } from "@/app/components/CategoriesAndMenus";')

with open(cp_path, 'w') as f:
    f.write(cp)

# 3. Update MobileSidebar.js
ms_path = 'app/components/MobileSidebar.js'
with open(ms_path, 'r') as f:
    ms = f.read()

# Add imports
ms = ms.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { categories, menus } from "./CategoriesAndMenus";')

# Remove menuItems
ms = re.sub(r'const menuItems = \[\s*\{.*?\}\s*\];\n', '', ms, flags=re.DOTALL)

# Replace mapping
ms = ms.replace('menuItems.map', 'menus.map')

# Replace Categories content
cats_pattern = r'\{activeTab === "CATEGORIES" && \([\s\S]*?No categories found\.[\s\S]*?</div>\s*\)\}'
cats_replacement = """{activeTab === "CATEGORIES" && (
            <ul className="flex flex-col">
              {categories.map((cat, index) => (
                <li key={index} className="border-b border-gray-100">
                  <Link
                    href="#"
                    onClick={onClose}
                    className="flex items-center justify-between p-4 text-[13px] font-bold text-[#444] hover:text-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">{cat.icon}</span>
                      <span className="uppercase">{cat.name}</span>
                    </div>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <IoChevronForward className="text-gray-400" size={16} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}"""
ms = re.sub(cats_pattern, cats_replacement, ms)

with open(ms_path, 'w') as f:
    f.write(ms)

# 4. Clean sliderData.js (Removing the whole categories export)
sd_path = 'app/(homePage)/slider/sliderData.js'
with open(sd_path, 'r') as f:
    sd = f.read()

# Remove the react-icons/md import
sd = re.sub(r'import\s*\{[\s\S]*?\}\s*from\s*"react-icons/md";\n', '', sd)

# Remove categories array (find everything from export const categories = [ to the first ]; before export const sliderData)
sd = re.sub(r'export const categories = \[\s*\{[\s\S]*?\];\n+', '', sd)

with open(sd_path, 'w') as f:
    f.write(sd)

print("Refactored menus successfully.")
