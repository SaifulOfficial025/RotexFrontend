import re

with open('app/components/footer.js', 'r') as f:
    content = f.read()

# Add import
if 'import { companyInfo }' not in content:
    content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { companyInfo } from "./CompanyInfo";')

# Remove socialLinks definition
content = re.sub(r'const socialLinks = \[\s*\{.*?\}\s*\];\n', '', content, flags=re.DOTALL)

# Replace description
content = re.sub(
    r'<p className="text-white/90 text-\[13\.5px\] leading-relaxed">\s*Rotex International is a trusted supplier.*?</p>',
    '<p className="text-white/90 text-[13.5px] leading-relaxed">\n              {companyInfo.shortDescription}\n            </p>',
    content, flags=re.DOTALL
)

# Replace phone
content = re.sub(
    r'href="tel:\+8801700000000"',
    'href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}',
    content
)
content = re.sub(
    r'<span>\+880 1700-000000</span>',
    '<span>{companyInfo.phone}</span>',
    content
)

# Replace email
content = re.sub(
    r'href="mailto:info@rotexbd\.com"',
    'href={`mailto:${companyInfo.email}`}',
    content
)
content = re.sub(
    r'<span>info@rotexbd\.com</span>',
    '<span>{companyInfo.email}</span>',
    content
)

# Replace address
content = re.sub(
    r'<span>\s*House #12, Road #4, Block B,\s*<br />\s*Niketan, Gulshan-1, Dhaka-1212,\s*<br />\s*Bangladesh\s*</span>',
    '<span>{companyInfo.address}</span>',
    content, flags=re.DOTALL
)

# Replace time
content = re.sub(
    r'<span>\s*Sun – Thu: 9:00 AM – 6:00 PM\s*<br />\s*Fri – Sat: Closed\s*</span>',
    '<span>{companyInfo.officeTime}</span>',
    content, flags=re.DOTALL
)

# Replace social links loop
content = re.sub(
    r'socialLinks\.map',
    'companyInfo.socialLinks.map',
    content
)

# Replace copyright name
content = re.sub(
    r'<span className="font-semibold text-white">\s*Rotex International\s*</span>',
    '<span className="font-semibold text-white">\n              {companyInfo.name}\n            </span>',
    content, flags=re.DOTALL
)


with open('app/components/footer.js', 'w') as f:
    f.write(content)

print("Footer updated successfully.")
