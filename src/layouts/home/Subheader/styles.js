import styled from 'styled-components';

const Container = styled.section`
  min-height: 920px;
  max-width: 1500px;
  margin: 0 auto;
  background-color: white;

  @media (max-width: 768px) {
    min-height: auto;
  }

  & > div {
    display: flex;

    @media (max-width: 992px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .testimony {
    height: 400px;
    width: 70%;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 1200px) {
      height: auto;
      padding-top: 20px;
    }

    h2 {
      font-size: 70px;
    }
  }

  .image-subheader {
    margin: 50px;

    @media (max-width: 992px) {
      margin: 20px auto;
    }

    img {
      width: 500px;
      height: auto;

      @media (max-width: 992px) {
        width: 420px;
      }

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
`;

export default Container;
