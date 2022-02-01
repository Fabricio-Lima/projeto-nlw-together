import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type propsPortal = {
    children: ReactNode,
}

const PortalModal = ({ children }: propsPortal) => {
    const portal = document.getElementById('modal-root')!

    return ReactDOM.createPortal(children, portal)
};

export default PortalModal;