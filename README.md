#MarkView - Markdown Previewer
A simple and intuitive Markdown Previewer built with React. It lets you type Markdown and instantly preview the rendered HTML output. Perfect for developers, writers, or anyone who loves Markdown!

🚀 Features
Real-time Markdown Preview: See the rendered HTML as you type.
Markdown Syntax Support: Includes headings, links, lists, images, and code blocks.
Custom Layout Controls: Adjust the editor and preview layout for a better experience.
Secure Rendering: Uses DOMPurify to sanitize output and prevent security vulnerabilities.
🛠️ Technologies Used
React: For building dynamic user interfaces.
Vite: A fast build tool for modern web projects.
Marked: Converts Markdown into HTML.
DOMPurify: Sanitizes the HTML output to ensure security.
CSS: Custom styling for a clean and responsive design.
🔧 Installation
Follow these steps to set up the project locally:

#Clone the Repository:

bash
Copy code
git clone https://github.com/Jeyceejeyka/MarkView.git
Navigate to the Project Directory:

bash
Copy code
cd MarkView
Install Dependencies:

bash
Copy code
npm install
Start the Development Server:

bash
Copy code
npm run dev
Open your browser and visit http://localhost:3000 to see the app in action.

🌐 Deployment
To deploy the app to GitHub Pages, follow these steps:

Add the homepage field to your package.json:

json
Copy code
"homepage": "https://Jeyceejeyka.github.io/MarkView"
Build the project:

bash
Copy code
npm run build
Deploy to GitHub Pages:

bash
Copy code
npm run deploy
Your app will be live at the specified homepage URL.

📂 Project Structure
App.js
Main logic for Markdown rendering and state management.
Uses marked to parse Markdown and DOMPurify to sanitize the HTML.
Code Snippet:
jsx
Copy code
import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function App() {
  const defaultMarkdown = `
    # Markdown Example
    - List item 1
    - List item 2
    \`\`\`
    function helloWorld() {
      return "Hello, world!";
    }
    \`\`\`
  `;
  const [value, setValue] = useState(defaultMarkdown);

  const getRenderedHTML = () => {
    const rawHTML = marked(value, { breaks: true });
    return { __html: DOMPurify.sanitize(rawHTML) };
  };

  return (
    <div>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <div dangerouslySetInnerHTML={getRenderedHTML()} />
    </div>
  );
}
App.css
Defines the layout and styling for the editor and preview sections.

css
Copy code
#container {
  display: flex;
  height: 100vh;
}

#aside {
  flex: 2;
}

#preview {
  flex: 6;
}

button {
  background: transparent;
  border: none;
  color: black;
}
📝 License
This project is licensed under the MIT License. Feel free to use, modify, and share it.

💡 Contributing
We welcome contributions! Feel free to:

Submit issues
Fork the project and submit pull requests
🙌 Acknowledgments
Thanks to the creators of React, Vite, Marked, and DOMPurify for making this project possible.

