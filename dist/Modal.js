"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
// Composant Modal qui affiche une fenêtre modale
const Modal = ({ isOpen, onClose, title, children, style }) => {
    if (!isOpen)
        return null;
    // Styles par défaut pour l'overlay de la modale
    const defaultOverlayStyle = {
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
    const defaultModalContentStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        width: '80%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };
    // Fusion des styles par défaut avec les styles personnalisés
    const overlayStyle = Object.assign(Object.assign({}, defaultOverlayStyle), style === null || style === void 0 ? void 0 : style.overlay);
    const modalContentStyle = Object.assign(Object.assign({}, defaultModalContentStyle), style === null || style === void 0 ? void 0 : style.modalContent);
    // Rendu de la modale dans le corps du document pour éviter les problèmes de z-index
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { style: overlayStyle, onClick: onClose },
        react_1.default.createElement("div", { style: modalContentStyle, onClick: (e) => e.stopPropagation() },
            title && react_1.default.createElement("h2", { style: { textAlign: 'center', marginTop: '0' } }, title),
            react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' } }, children))), document.body);
};
exports.default = Modal;
