import React from 'react';
import Modal from 'react-modal';

function ModalTry() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: { backgroundColor: 'grey' },
    content: { color: 'orange' },
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* onRequestClose : esc key and outside modal click, then modal will close */}
        <h1> Welcome </h1>
        <p> This is Modal </p>
        <button onClick={closeModal}>Close </button>
      </Modal>
    </div>
  );
}

export default ModalTry;
