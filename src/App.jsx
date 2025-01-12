import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization
import './App.css'

const App = () => {
// Default Markdown text
const defaultMarkdown = `
# Heading (H1)

## Sub-heading (H2)

[This is a link](https://www.freecodecamp.org)

\`Inline code\`

\`\`\`
// Code block
function helloWorld() {
return "Hello, world!";
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;


const [value, setValue] = useState(defaultMarkdown);

// Function to convert Markdown to sanitized HTML
const getRenderedHTML = () => {
const rawHTML = marked(value, { breaks: true }); // Render Markdown to raw HTML
return { __html: DOMPurify.sanitize(rawHTML) }; // Sanitize the raw HTML
};
// function to handle the typed text
const handleTextChange = (e) => {
setValue(e.target.value);
};

//function for the button that displays the preview to none;
const btnChange1 = () => {
// Toggle the 'btn1' class on the element with ID 'preview'
document.getElementById('preview').classList.toggle('btn2');
};
// Function for the button that toggles the 'btn1' class on the aside element
const btnChange2 = () => {
document.getElementById('aside').classList.toggle('btn1');
};

return (
<div id='container'>
{/* Editor Section */}
<aside id="aside">
<header className="header1">
<p>Editor</p>
<button id='button1' type='button' onClick={btnChange1}>X</button>
</header>
<textarea
id="editor"
value={value}
onChange={handleTextChange}
placeholder="Type Markdown here..."
></textarea>
</aside>

{/* Preview Section */}
<div id="preview">
<header className="header2">
<p>Preview</p>
<button id='button2' type='button' onClick={btnChange2}>X</button>
</header>
<div
dangerouslySetInnerHTML={getRenderedHTML()} // Safely render sanitized HTML
></div>
</div>
</div>
);
}

export default App

