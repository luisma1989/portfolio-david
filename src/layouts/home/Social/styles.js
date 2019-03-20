import styled from 'styled-components'
import IconFacebook from './assets/facebook-logo.svg'
import IconIntagram from './assets/instagram-logo.svg'
import IconLinkedin from './assets/linkedin-logo.svg'
import IconTwitter from './assets/twitter-logo.svg'
import IconYoutube from './assets/youtube-logo.svg'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  max-width: 1500px;
  margin: 0 auto;
  background-color: white;

  @media (max-width: 768px) {
    height: 320px;
    justify-content: space-around;
  }
`
export const Row = styled.div`
  width: 16%;
  display: flex;
  justify-content: center;
  &:last-child {
    border: 0;
  }
  .icon {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat!important;
    display: block;
    background-size: contain!important;
  }
  .icon-facebook {
    background: url(${IconFacebook});
  }
  .icon-instagram {
    background: url(${IconIntagram});
  }
  .icon-linkedin {
    background: url(${IconLinkedin});
  }
  .icon-twitter {
    background: url(${IconTwitter});
  }
  .icon-youtube {
    background: url(${IconYoutube});
  }
  @media (max-width: 768px) {
    width: 23%;
    text-align: center;
    border-right: 1px solid #DEDEDE;
    &:last-child {
      border: 0;
    }
    .icon {
      height: 26px;
      width: 26px;
      background-size: contain;
    }
    .icon-youtube {
      width: 30px;
    }
  }
`
