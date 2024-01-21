import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { MouseEvent, createContext, useContext, useRef } from "react";
const ModalContext = createContext(null);

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: MouseEvent) => {
    if (!modalRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleClose}
      >
        <div ref={modalRef} className="bg-white w-full max-w-md p-4 rounded-md">
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const closeButton = () => {
  const { onClose } = useContext(ModalContext);
  return (
    <button
      className="text-red-400 font-semibold   rounded-lg cursor-pointer ml-auto"
      onClick={() => onClose()}
    >
      X
    </button>
  );
};

Modal.CloseButton = closeButton;

export default Modal;
