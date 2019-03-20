import styled from 'styled-components'
import { H1, H5 } from 'components/Fonts'
import { yellow, black } from 'utils/constants/colors'

export const Container = styled.article`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 75px;
`

export const Header = styled.div`
  display: flex;
  min-height: 150px;
  align-items: center;
  justify-content: space-between;
  margin: 0 150px;

  div {
    display: flex;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-left: 20px;

      &:first-child {
        background-color: ${yellow};
      }

      &:last-child {
        background-color: ${black};
      }
    }

    h5 {
      margin: 0;
    }
  }
`

export const Section = styled.section`
  display: flex;
`
export const Article = styled.article`
  &:first-child {
    flex: 1 45%;
    padding-left: 150px;
    padding-right: 200px;
  }

  &:last-child {
    flex: 1 55%;
    margin-right: 150px;
  }

  img {
    width: 100%;
  }
`
export const Title = styled(H1)`
  margin-bottom: 40px;
`

export const FirstLetter = styled(H5)`
  color: ${black};
`

export const SecondLetter = styled(H5)`
  color: ${yellow};
`
