import React from 'react'
import emailjs from 'emailjs-com';

import { CallToMessage, ContactSectionBackground, ContactSectionContainer, ContactSectionTitle, FieldContainer, FormContainer, InputWrapper, NameLine, SendButton, StyledInput, StyledLabel } from './ContactElements';

const ContactSection = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_7d6hwmn', 'template_mmkoolq', e.target, 'qGkgBUkkqo3MDqlkU')
      .then((result) => {
          const form = document.getElementById("email-form");
          form.reset();
          console.log('email sent');
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
    <>
      <ContactSectionBackground>
        <ContactSectionTitle>Contact Me</ContactSectionTitle>
        <ContactSectionContainer>
          <CallToMessage>
            I'll be glad to answer your questions!
          </CallToMessage>
          <FormContainer>
            <form onSubmit={sendEmail} id="email-form">
              <FieldContainer>
                <NameLine>
                  <InputWrapper>
                    <StyledInput name="name" placeholder="first name"/>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                  </InputWrapper>
                  <InputWrapper>
                    <StyledInput name="subject" placeholder="last name"/>
                    <StyledLabel htmlFor="subject">Subject</StyledLabel>
                  </InputWrapper>
                </NameLine>
                <InputWrapper>
                  <StyledInput name="email" placeholder="email"/>
                  <StyledLabel htmlFor="email">Return Email</StyledLabel>
                </InputWrapper>
                <InputWrapper>
                  <StyledInput name="message" placeholder="message"/>
                  <StyledLabel htmlFor="message">Message</StyledLabel>
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