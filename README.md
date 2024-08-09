# DraggableJS
MAKE YOUR HTML ELEMENT DRAGGLE WITH SIMPLE STESP.

1. ADD Fdraggble.js file in your project directory.
2. create a seperate file main.js (or with preferable name and include in your project)
3. <code>

import { FDraggable } from './FDraggable.js';
document.addEventListener('DOMContentLoaded', () => {
    const elementId = 'myDraggleElement'; // myDraggleElement - DRAGGLE ELEMENT ID
    let myDraggable = new FDraggable(elementId);
});

</code>
