import styled from "styled-components";
import { IoMdClose } from "react-icons/io";




export const ModalContainer = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    height: 90vh;
    width: 90vh;
    position: relative;
    margin: auto;
    background: black;
    color: white;
    text-alignment: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 22px;
  color: white;
  
  &:hover {
    cursor: pointer;
    text: 
  }
`