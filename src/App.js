import React, { useState, useEffect } from 'react';
//import DOMPurify from 'dompurify';
import { marked } from 'marked';
import './App.css';

function App() {

    //header (H1 size), 
    //a sub header(H2 size),
    //a link,
    //inline code,'
    // a code block,
    //a list item,
    //a blockquote, 
    //an image,
    //bolded text

    marked.setOptions({
        breaks: true,
    })

    const [text, setText] = useState(` 
# Header
## Sub header
[FreeCodeCamp](https://www.freecodecamp.org/)

\`<h1>Hello</h1>\`

\`\`\`
<html>
      <head>
          <h1> Hello React!</h1>
      </head>
</html>
\`\`\`

1. First item
2. Second item
3. Third item
- Indented item
- Indented item
4. Fourth item


> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

![FREECODECAMP](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg "size=100x80")

I just love **bold text**.
        `);

    const cleaned = (txt) => {
        return txt;
       /* const window = new JSDOM('').window;
        const purify = DOMPurify(window);
        return purify.sanitize(txt);*/
    }

    function onEditorChange(event) {
        setText(event.target.value);
    }

  return (
    <div className="App">
          <header className="Apps-header">
              <textarea id="editor"
                  onChange={onEditorChange}
                  value={text}
              ></textarea>
              <div id="preview"
                  dangerouslySetInnerHTML=
                  {{ __html: marked(text) }} >

              </div>
        
      </header>
    </div>
  );
}

export default App;
