import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";


function CartModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {/* Tombol untuk membuka modal */}
      <button
        onClick={openModal}
        className="text-red-400 hover:text-red-700 focus:outline-none"
      >
        <ShoppingCart size={30}/>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal} />
          <div className="bg-white rounded-lg shadow-lg w-96 z-10 p-4">
            <h2 className="text-lg font-semibold">Keranjang Anda</h2>
            <p className="mt-2">Kosong</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
