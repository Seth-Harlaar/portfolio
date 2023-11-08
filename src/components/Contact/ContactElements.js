import styled from 'styled-components'



export const ContactSectionBackground = styled.div`
  padding: 0 30px 30px 30px;
`
  
export const ContactSectionContainer = styled.div`
  padding: 30px;
  background-color: #0e182b;
`

export const ContactSectionTitle = styled.h1`
  padding-bottom: 13px;
  font-size: 19px;
  color: #E5E5E5;
`


export const CallToMessage = styled.h1`
  width: 70%;
  font-size: 14px;
  color: #E5E5E5;
`


// form fields
export const FormContainer = styled.div`
  margin-top: 40px;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`

export const InputWrapper = styled.div`
  position: relative;
  height: 55px;
  padding: 10px 0;
  width: 100%;
  color: white;
`

export const NameLine = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  gap: 20px;
  div {
    flex: 1;
  }
`

export const StyledInput = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 8px 0;
  background-color: rgba(0,0,0,0);
  border: none;
  border-bottom: #B6B6B6 solid 2px;
  outline: none;
  color: #E5E5E5;

  transition: 0.2s;

  &::placeholder {
    color: transparent;
  }

  // input empty
  &:placeholder-shown + label {
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
  }

  &:focus {
    border-bottom: #FCA311 solid 2px;
  }

  // when label focused
  &:focus + label {
    color: #FCA311;
    top: 0;
    font-size: 14px;
  }
`

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  transition: 0.2s;
  font-size: 14px;
  color: #B6B6B6;
`

export const SendButton = styled.button`
  width: 100px;
  border: none;
  padding: 10px 8px;
  border-radius: 2px;
  text-decoration: none;
  color: #0e182b;
  font-weight: 700;
  background-color: #FCA311;

  &:hover {
    cursor: pointer;
  }
`