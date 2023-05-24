import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Backdrop, StyledModal } from "./CatrModal.styled";

const modalRoot = document.querySelector("#modal-root");

const CartModal = ({ children, onClick }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown({ code }) {
    if (code === "Escape") {
      onClick();
    }
  }

  function handleBackDropClick({ target, currentTarget }) {
    if (target === currentTarget) {
      onClick();
    }
  }

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <StyledModal>{children}</StyledModal>
    </Backdrop>,
    modalRoot
  );
};

export default CartModal;
