import React, { useEffect } from 'react';
import './App.css';


function Modal(props) {
    
    const onKeyDown = (event) => {
        let modal = document.querySelector('.modal');
        let focusableElementsString = `a[href], area[href], input:not([disabled]), button:not([disabled]), 
                                    iframe, object, embed, [tabindex="0"], [contendeditable]`;

        let focusableElements = modal.querySelectorAll(focusableElementsString);
        focusableElements = Array.prototype.slice.call(focusableElements);

        let firstElement = focusableElements[0];
        let lastElement = focusableElements[focusableElements.length - 1];


        if (!focusableElements.includes(document.activeElement)) {
            firstElement.focus();
        }

        if (event.keyCode === 9) {
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }

        if (event.keyCode === 27) {
            props.onCancel();
        }
    }

    useEffect(() => {
        document.onkeydown = onKeyDown;
        
      })
  
    return (
        <div className="modal" style={{display : props.displayChild}}  >
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={props.close}>&times;</span>
                    <h2>{props.heading}</h2>
                </div>
                {props.children}
                <div className="modal-footer">
                    <h6>{props.footer}</h6>
                </div>
            </div>
        </div>
    );
}

export default Modal;


