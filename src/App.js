import React from 'react';
import Modal from "react-modal";
import { FaShoppingBasket } from 'react-icons/fa';


//import ReactDOM from 'react-dom';

import './App.css';


Modal.setAppElement("#root");


const customStyles = {
  content: {
    top: '70%',
    left: '55%',
    right: '55%',
    bottom: 'auto',
    marginRight: '5%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    height: '60wh',
  },
};

function App() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className='text-2xl fixed z-50 w-screen bg-zinc-200 p-16 px-16 text-green-800 flex flex-col gap-8'>
      <div className='flex flex-col items-end gap-8 text-red-600 cursor-pointer text-5xl'>
      <FaShoppingBasket onClick={openModal} />
      </div>
      
        <button onClick={openModal}>Open here or in the basket</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
        <div className=' text-zinc-500 text-3xl font-bold flex flex-row-2 gap-8' >
          <h2 className='text-zinc-800 text-3xl font-bold flex flex-row p-2 py-0 gap-5' ref={(_subtitle) => (subtitle = _subtitle)}>Revise seu pedido!</h2>
          <button className='text-zinc-500 text-3xl font-bold flex-1 flex-row p-0  justify-end items-end gap-28' onClick={closeModal}>X</button>

        </div>


        
        <div className='p-20'>
          I am a modal
          <img  className="w-40 h-40 -mt-1 cursor-pointer"
            src="https://i.pinimg.com/736x/96/1d/74/961d74148ad5ab689c75d84c19dc8897.jpg" alt="pedido" />
        </div>
        <form>
          <input />

          <div className= 'text-white font-semibold flex-1 justify-between items-center p-2 rounded-xl gap-7'>

          <button className='border-green-900 text-white font-semibold bg-green-900 justify-center items-center p-2 rounded-xl gap-7 flex-auto' >Continuar adicionando</button>
          <button className='border-green-900 text-white font-semibold bg-green-900 justify-center items-center p-2 rounded-xl gap-7 flex-auto' >Adicionar ao pedido</button>
          
          </div>
            
           
        </form>
      </Modal>
    </div>
  );
}

export default App;