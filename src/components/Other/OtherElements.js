import styled from 'styled-components';

export const PapersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 0 20px;
`

export const DocTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  background-color: #181f30;
  border-radius: 5px;
  padding: 20px;
  font-size: 12px;
  color: ${props => props.theme.light};

  // title
  > h1  {
    font-weight: 300;
  }

  > div {

    // topic listing
    &:nth-child(2) {
      font-size: 15px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      color: ${props => props.theme.moreFadedText};

      > h1 {
        color: ${props => props.theme.fadedText};
        font-size: 15px;
        font-weight: 300;
      }
    }


    // buttons
    &:nth-child(4) {
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
      gap: 15px;

      > div {
        &:nth-child(1) {

        }

        &:nth-child(2) {
          text-align: center;
          border-radius: 4px;
          background-color: ${props => props.theme.highlight};
          padding: 10px;
          width: 35%;
        }
      }
    }
  }
`

export const StatContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;


  > div {

    > div {

      &:nth-child(1) {
        color: ${props => props.theme.fadedText};
      }

      &:nth-child(2) {
        color: ${props => props.theme.moreFadedText};
      }

    }
  }
`