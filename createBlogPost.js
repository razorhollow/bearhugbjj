const fs = require('fs');
const path = require('path');

function createBlogPost(postName) {
  // Define the paths
  const rootPath = path.join(__dirname, 'blog'); // This points to the /blog directory
  const blogPath = path.join(rootPath, postName);
  const mdxTemplate = `
---
title: "Blog-Title"
date: "${new Date().toISOString().split('T')[0]}"
slug: "${postName}"
hero_image: "./fileName.jpg"
hero_image_alt: "Add your image alt text here"
hero_image_credit_text: "Credit Name"
hero_image_credit_link: "Credit Link"
---
Craft Your Post Here
`;

// Create the directory
if (!fs.existsSync(blogPath)) {
  fs.mkdirSync(blogPath, { recursive: true });
} else {
  throw new Error(`Directory "${postName}" already exists. Please choose a different post name or delete the existing directory.`);
}

// Create the MDX file
fs.writeFileSync(path.join(blogPath, 'index.mdx'), mdxTemplate);
console.log(`Blog post created at: ${blogPath}/index.mdx`);

}

// Check if the script is being run directly
if (require.main === module) {
  const postName = process.argv[2];

  if (!postName) {
    console.error("Error: Please provide a post name.");
    process.exit(1);
  }

  createBlogPost(postName);
}
