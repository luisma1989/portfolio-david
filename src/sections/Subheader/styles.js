import styled from 'styled-components';

const Container = styled.section`
  min-height: 920px;
  max-width: 1500px;
  margin: 0 auto;
  background-color: white;

  .container {
    display: flex;
  }

  .testimony {
    height: 400px;
    width: 70%;

    h2 {
      font-size: 70px;
    }
  }

  .image-subheader {
    margin: 50px;

    img {
      width: 500px;
      height: auto;
    }
  }
`;

export default Container;
