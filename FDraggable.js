export class FDraggable {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        if (this.element) {
            this.element.parentNode.style.position = 'relative';
            this.element.style.position = 'absolute';
            this.element.style.zIndex = '999';
            this.element.style.cursor = 'move';
            this.element.onmousedown = this.dragMouseDown.bind(this);
        } else {
            alert('Invalid element ID passed');
        }

        this.pos1 = 0;
        this.pos2 = 0;
        this.pos3 = 0;
        this.pos4 = 0;
    }

    dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.closeDragElement.bind(this);
        document.onmousemove = this.elementDrag.bind(this);
    }

    elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;

        let newTop = this.element.offsetTop - this.pos2;
        let newLeft = this.element.offsetLeft - this.pos1;

        let viewportHeight = window.innerHeight;
        let viewportWidth = window.innerWidth;
        let elementHeight = this.element.offsetHeight;
        let elementWidth = this.element.offsetWidth;

        if (newTop < 0) {
            newTop = 0;
        } else if (newTop + elementHeight > viewportHeight) {
            newTop = viewportHeight - elementHeight;
        }

        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft + elementWidth > viewportWidth) {
            newLeft = viewportWidth - elementWidth;
        }

        this.element.style.top = newTop + "px";
        this.element.style.left = newLeft + "px";
    }

    closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    //IERldmVsb3BlZCBieSBGaXJveiBBbnNhcmk=
}
