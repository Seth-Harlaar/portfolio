import styled from 'styled-components';

export const ReviewTitle = styled.h1`
  font-size: 19px;
  color: #E5E5E5;
  padding-bottom: 13px;
`

export const ReviewSectionContainer = styled.div`
  padding: 0 30px 30px 30px;
`

export const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  color: #E5E5E5;
`

export const ReviewCard = styled.div`
  min-width: 300px;
  flex: 1;
  position: relative;
  padding: 30px;
  background-color: #0e182b;
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
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: #0C1424;
  // box-shadow: 2px 2px 5px (0,0,0);
  padding: 5px 8px;
  border-radius: 20px;
`

export const ExternalLink = styled.a`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #B6B6B6;

  &:hover {
    color: #FCA311;
  }
`