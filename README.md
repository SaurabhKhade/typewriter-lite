# Typewriter Lite

This is ultra small, zero dependency javascript package for animated typing or typewriter effect. it can be used with JavaScript as well ad ReactJS.
 

## Installation

The package is available at [npm](https://www.npmjs.com/package/typewriter-lite) and source code is available at [github](https://github.com/SaurabhKhade/typewriter-lite)

```bash
npm install typewriter-lite
#or
yarn add typewriter-lite
```

## Parameters

Package has only function which takes a object of customizable values.

1. **element** (required): 
  Reference to a element inside which text to be written
2. **texts_array** (required):
  Array of all sentences which are to be written inside element.
3. **write_delay** (optional):
  Delay before starting to write each sentence in milliseconds. default to 500ms.
4. **remove_delay** (optional):
  Delay before starting to remove each sentence in milliseconds. default to 500ms.
5. **write_delay_per_char** (optional):
  Delay before writing each character of sentence in milliseconds. default to 100ms.
6. **remove_delay_per_char** (optional):
  Delay before removing each character of sentence in milliseconds. default to 100ms.

##### All values should be passed in a object as shown below

```javascript
typewriter({
  element: MyDiv,
  texts_array: MyArray,
  write_delay: 500,
  remove_delay: 500,
  write_delay_per_char: 100,
  remove_delay_per_char: 100
});
```

## Usage

#### With React

```javascript
import React,{useEffect,useRef} from 'react';
import typewriter from 'typewriter-lite';

export default function Container() {
  
  const typeRef = useRef(null);
  const text = [
    'This is Typewriter Lite',
    'for animated typing effect',
    'it has Customizable speed'
  ];
  
  useEffect(()=>{
    typewriter({
      element: (typeRef.current),
      texts_array: text
    });
  },[]);
  
  return (
    <div>
      <h1>
        Welcome
      </h1>
      <h3 ref={typeRef}></h3>
    </div>
  );
}
```

[![image](https://www.linkpicture.com/q/ezgif.com-gif-maker_21.gif)](https://www.linkpicture.com/view.php?img=LPic60e2b12dabcf4197081038)


##### *Support for vanilla JavaScript will be added soon
