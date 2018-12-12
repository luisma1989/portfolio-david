import styled from 'styled-components'
import { rem } from 'polished'
import { H2, H3, H4, H5 } from 'components/Fonts'

export const Wrapper = styled.section`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
`;
Wrapper.displayName = 'Wrapper';

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;
Container.displayName = 'Container';

export const Title = styled(H2)`
  /* margin-top: ${rem('20px')}; */
`;
Title.displayName = 'Title';

export const Subtitle = styled(H3)`
  /* margin-top: ${rem('20px')}; */
`;
Subtitle.displayName = 'Subtitle';

export const List = styled.ol`
  display: flex;
  flex-direction: column;
`;
List.displayName = 'List';
