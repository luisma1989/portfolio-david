import styled from 'styled-components'
import { rem } from 'polished'
import { H2, H3 } from 'components/Fonts'

export const Wrapper = styled.section`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: ${rem('50px')};
  background-color: white;
`;
Wrapper.displayName = 'Wrapper';

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;
Container.displayName = 'Container';

export const Title = styled(H2)`
  margin-bottom: ${rem('60px')};

  @media (max-width: 1200px) {
    margin-bottom: ${rem('20px')};
  }
`;
Title.displayName = 'Title';

export const Subtitle = styled(H3)`
  span {
    color: ${({ theme}) => theme.colors.rose};
    font-weight: bold;
  }
`;
Subtitle.displayName = 'Subtitle';

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  padding-left: 0;

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;
List.displayName = 'List';
