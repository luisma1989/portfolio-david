import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  min-height: 550px;
  max-width: 1500px;
  background-color: white;
  margin: 0 auto;

  img {
    min-width: 560px;
    height: 500px;
    position: relative;
    left: 0;
  }

  .text-section {
    height: 500px;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.gray};
    padding: 100px 50px;
    position: relative;
    right: 0;
    top: 50px;

    article {
      color: white;
      flex: 0 0 45%;
    }
  }
`;

export default Container;
