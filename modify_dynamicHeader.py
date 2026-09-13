import re

with open('app/components/dymanicHeader.js', 'r') as f:
    content = f.read()

# 1. Add imports
if 'import MobileSidebar' not in content:
    content = content.replace('import Logo from', 'import MobileSidebar from "./MobileSidebar";\nimport Cart from "./Cart";\nimport Logo from')

# 2. Add states
if 'const [isSidebarOpen, setIsSidebarOpen] = useState(false);' not in content:
    content = content.replace('const [lastScrollY, setLastScrollY] = useState(0);', 'const [lastScrollY, setLastScrollY] = useState(0);\n  const [isSidebarOpen, setIsSidebarOpen] = useState(false);\n  const [isCartOpen, setIsCartOpen] = useState(false);')

# 3. Modify hamburger button
# From:
#             onClick={() => {
#               window.scrollTo({ top: 0, behavior: "smooth" });
#               // Small delay to ensure smooth scroll starts before layout shift from menu open
#               setTimeout(() => {
#                 const menuBtn = document.getElementById(
#                   "mobile-menu-toggle-btn",
#                 );
#                 if (menuBtn) menuBtn.click();
#               }, 300);
#             }}
# To: onClick={() => setIsSidebarOpen(true)}
pattern_hamburger = r'onClick=\{\(\) => \{[\s\S]*?setTimeout\([\s\S]*?\}\s*\}\}'
content = re.sub(pattern_hamburger, 'onClick={() => setIsSidebarOpen(true)}', content)

# 4. Modify Cart button
# From: <Link href="#" className="flex items-center space-x-2 group">
# To: <button onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }} className="flex items-center space-x-2 group">
pattern_cart_open = r'<Link href="#" className="flex items-center space-x-2 group">'
content = re.sub(pattern_cart_open, '<button onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }} className="flex items-center space-x-2 group">', content)

# Modify Cart closing tag from </Link> to </button>
# The structure:
#               <span className="text-sm font-bold text-gray-800 hidden sm:block">
#                 ৳0.00
#               </span>
#             </Link>
pattern_cart_close = r'(<span className="text-sm font-bold text-gray-800 hidden sm:block">\s*৳0\.00\s*</span>\s*)</Link>'
content = re.sub(pattern_cart_close, r'\1</button>', content)

# 5. Wrap return in <> ... </> and append components
# Currently: return (\n    <div ...> ... </div>\n  );\n}
# We need to change the outermost <div> to be inside <>.
pattern_return = r'return \(\s*<div\n'
content = re.sub(pattern_return, 'return (\n    <>\n      <div\n', content, count=1)

# And before the final `  );\n}` we need to close the div, append modals, and close fragment
pattern_end = r'      </div>\n    </div>\n  \);\n\}'
replacement_end = r'''      </div>
    </div>
    <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  </>
  );
}'''
content = re.sub(pattern_end, replacement_end, content)

with open('app/components/dymanicHeader.js', 'w') as f:
    f.write(content)

print("DynamicHeader updated successfully.")
