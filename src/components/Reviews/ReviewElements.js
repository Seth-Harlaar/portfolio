import styled from 'styled-components';


export const ReviewsContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  color: #E5E5E5;
`

export const ReviewCard = styled.div`
  flex: 1;
  position: relative;
  padding: 30px;
  background-color: #14213D;
`

export const ReviewContent = styled.div`
`

export const ReviewName = styled.h1`
  font-size: 14px;
  padding-bottom: 5px;
`

export const ReviewSource = styled.h1`
  color: #B6B6B6;
  font-size: 12px;
  letter-spacing: 0.5px;
  padding-bottom: 13px;
`

export const ReviewDescription = styled.p`
  text-align: justify;
  line-height: 1.25;
  letter-spacing: 0.5px;
  font-size: 13px;
  color: #B6B6B6;
  font-style: italic;
`

export const ReviewRatingContainer = styled.div`
  background-color: #0C1424;

  position: absolute;
  top: 25px;
  right: 25px;

  padding: 5px 8px;
  border-radius: 20px;

`

