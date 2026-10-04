import re

file_path = "assets/styles.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix the syntax error in .hero
pattern = r'(\.hero\s*\{\s*min-height:\s*100svh;\s*\/\* safe viewport height for mobile browsers \*\/\s*\})\s*flex-direction:\s*column;\s*justify-content:\s*center;'
replacement = r'    .hero {\n        min-height: 100svh;\n        flex-direction: column;\n        justify-content: center;\n    }'

if re.search(pattern, content):
    content = re.sub(pattern, replacement, content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Fixed syntax error in .hero.")
else:
    print("Syntax error not found!")
