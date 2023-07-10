import { useEffect, useRef } from "react";
import { styled } from "styled-components";

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef();
  const Modals = styled.div`
    dialog:modal {
      border: 4px solid #90b7fd;
      width: 315px;
      height: 315px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return (
    <Modals>
      <dialog ref={ref} className='modals'>
        {children}
      </dialog>
    </Modals>
  );
}
