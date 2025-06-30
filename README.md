# Easy Modal

Une librairie React pour afficher des modals de manière simple et personnalisable.

## Installation

Pour installer la librairie, utilisez npm :

```bash
npm install @oussop/easy-modal
```

## Utilisation
Exemple de base
Voici un exemple de base pour utiliser la modal dans votre application React:

```bash
import React, { useState } from 'react';
import Modal from '@oussop/easy-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Modal"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Exemple avec personnalisation des styles
Vous pouvez personnaliser le style de la modal en utilisant la prop style :

```bash
import React, { useState } from 'react';
import Modal from '@oussop/easy-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#ffffff',
      padding: '30px',
    },
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Styled Modal"
        style={modalStyles}
      >
        <p>This modal has custom styles!</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Personnalisation
Vous pouvez personnaliser le style de la modal en utilisant la prop style. Voici un exemple de personnalisation avancée :

```bash
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
    modalContent: {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '10px',
    },
  }}
>
  <p>This modal has a blue overlay and light gray content background.</p>
</Modal>
```

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request pour proposer des améliorations ou signaler des bugs.

