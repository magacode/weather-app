import React from 'react';

import Portal from '../portal';

const Modal = ({ title, isOpen, onCancel, children }) => {

    return (
        <>
            {
                isOpen && 
                    <Portal> 
                        <div className=''>
                            {children}
                        </div>
                    </Portal> 
            }  
        </>
    )
}

export default Modal;