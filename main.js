import { FDraggable } from './FDraggable.js';
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        'elementId' : 'myDraggleElement', // myDraggleElement - DRAGGLE ELEMENT ID
        'elementHeaderId' : 'myDraggleElementHeader'
    }
    let myDraggable = new FDraggable(options);
});