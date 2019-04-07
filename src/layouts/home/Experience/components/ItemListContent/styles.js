import styled from 'styled-components'
import { H4, H5 } from 'components/Fonts'

export const ItemList = styled.li`
  display: flex;
  margin-top: 100px;


  &.image-rigtht {
    flex-direction: row-reverse;
  }

  img {
    height: auto;
    width: 520px;
    background-position: center;
    background-size: cover;
    margin: 0 auto;

    @media (max-width: 1060px) {
      width: 350px;
      height: 50%;
    }

    @media (max-width: 850px) {
    }
  }
`;
ItemList.displayName = 'ItemList';

export const Info = styled.div`
  max-width: 40%;
  margin: 0 auto;
`;

export const TitleSection = styled(H4)`

`;
TitleSection.displayName = 'TitleSection';

export const SubtitleSection = styled(H5)`

`;
SubtitleSection.displayName = 'SubtitleSection';
