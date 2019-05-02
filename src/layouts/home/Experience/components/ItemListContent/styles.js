import styled from 'styled-components'
import { H4, H5 } from 'components/Fonts'
import { rem } from 'polished'

export const ItemList = styled.li`
  display: flex;
  margin-top: ${rem('100px')};

  @media (max-width: 768px) {
    margin-top: ${rem('20px')};
  }

  @media (max-width: 680px) {
    flex-wrap: wrap;
    flex-direction: column-reverse!important;
  }

  &.image-right {
    flex-direction: row-reverse;

    @media (max-width: 680px) {
      flex-direction: row-reverse;
    }
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
      max-width: 100%;
    }

    @media (max-width: 850px) {
    }
  }
`;
ItemList.displayName = 'ItemList';

export const Info = styled.div`
  max-width: 40%;
  margin: 0 auto;

  @media (max-width: 680px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const TitleSection = styled(H4)`

`;
TitleSection.displayName = 'TitleSection';

export const SubtitleSection = styled(H5)`

`;
SubtitleSection.displayName = 'SubtitleSection';
