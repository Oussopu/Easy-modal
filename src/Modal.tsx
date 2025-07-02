import React from 'react';
import ReactDOM from 'react-dom';

// Interface définissant les props que le composant Modal accepte
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

// Composant Modal qui affiche une fenêtre modale
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, style }) => {
    if (!isOpen) return null;

    // Styles par défaut pour l'overlay de la modale
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

    // Styles par défaut pour le contenu de la modale
    const defaultModalContentStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        width: '80%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };

    // Fusion des styles par défaut avec les styles personnalisés
    const overlayStyle: React.CSSProperties = {
        ...defaultOverlayStyle,
        ...style?.overlay,
    };

    const modalContentStyle: React.CSSProperties = {
        ...defaultModalContentStyle,
        ...style?.modalContent,
    };

    // Rendu de la modale dans le corps du document pour éviter les problèmes de z-index
    return ReactDOM.createPortal(
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                {/* Affichage du titre s'il est fourni */}
                {title && <h2 style={{ textAlign: 'center', marginTop: '0' }}>{title}</h2>}
                {/* Contenu de la modale centré */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
