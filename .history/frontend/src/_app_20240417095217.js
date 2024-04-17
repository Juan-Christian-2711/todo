import React from 'react';
import { createRoot } from 'react-dom/client';
function app(){
    // Write code here:
    const container = document.getElementById('container');

    const root = createRoot(container);

    root.render(<h1>Hello world</h1>);
}