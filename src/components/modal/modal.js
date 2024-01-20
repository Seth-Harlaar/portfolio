import React, { useContext } from "react";

import { ModalContext } from "../../providers/modalProvider";
import { CloseButton, ModalContainer } from "./ModalElement";

function Modal({children}){

  const {closeModal} = useContext(ModalContext);

  return(
    <>
      <ModalContainer id="modal">
        <div>
          <div>
            {children}
          </div>
          <CloseButton onClick={closeModal}/>
        </div>
      </ModalContainer>
    </>
  );
}




export default Modal;