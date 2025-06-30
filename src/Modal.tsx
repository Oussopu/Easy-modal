import React from 'react';
import ReactDOM from 'react-dom';

// Interface defining the props that the Modal component accepts
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

// Modal component that displays a modal window
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, style }) => {
    if (!isOpen) return null;

    // Default styles for the modal overlay
    const defaultOverlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    };

    // Default styles for the modal content
    const defaultModalContentStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        width: '80%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };

    // Merging default styles with custom styles
    const overlayStyle: React.CSSProperties = {
        ...defaultOverlayStyle,
        ...style?.overlay,
    };

    const modalContentStyle: React.CSSProperties = {
        ...defaultModalContentStyle,
        ...style?.modalContent,
    };

    // Rendering the modal in the document body to avoid z-index issues
    return ReactDOM.createPortal(
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                {/* Close button in the top right */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: '#aaa',
                        fontWeight: 'bold',
                    }}
                >
                    &times;
                </button>
                {/* Display the title if provided */}
                {title && <h2 style={{ textAlign: 'center', marginTop: '0' }}>{title}</h2>}
                {/* Centered modal content */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
