import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    style?: {
        overlay?: React.CSSProperties;
        modalContent?: React.CSSProperties;
    };
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
