import React, { ReactNode, useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styles';

type propsModal = {
    children: ReactNode,
    status: boolean
}

const Modal = ({ children, status }: propsModal) => {

    if (!status) return null;

    return (
        <Portal>
            <Overlay>
                <Dialog>{children}</Dialog>
            </Overlay>
        </Portal>
    );
};

export default Modal;