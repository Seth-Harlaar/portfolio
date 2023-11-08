import React from 'react'


import { CallToMessage, ContactSectionBackground, ContactSectionContainer, ContactSectionTitle, FieldContainer, FormContainer, InputWrapper, NameLine, SendButton, StyledInput, StyledLabel } from './ContactElements';

const ContactSection = () => {
  return(
    <>
      <ContactSectionBackground>
        <ContactSectionTitle>Contact Me</ContactSectionTitle>
        <ContactSectionContainer>
          <CallToMessage>
            I'll be glad to answer your questions!
          </CallToMessage>
          <FormContainer>
            <form>
              <FieldContainer>
                <NameLine>
                  <InputWrapper>
                    <StyledInput name="firstName" placeholder="first name"/>
                    <StyledLabel for="firstName">First Name</StyledLabel>
                  </InputWrapper>
                  <InputWrapper>
                    <StyledInput name="lastName" placeholder="last name"/>
                    <StyledLabel for="lastName">Last Name</StyledLabel>
                  </InputWrapper>
                </NameLine>
                <InputWrapper>
                  <StyledInput name="email" placeholder="email"/>
                  <StyledLabel for="email">Email</StyledLabel>
                </InputWrapper>
                <InputWrapper>
                  <StyledInput name="message" placeholder="message"/>
                  <StyledLabel for="message">Message</StyledLabel>
                </InputWrapper>
                <SendButton type="submit">Send</SendButton>
              </FieldContainer>
            </form>
          </FormContainer>

        </ContactSectionContainer>
      </ContactSectionBackground>
    </>
  )
}



export default ContactSection;