import styled, {keyframes} from "styled-components";
import Gallery from "react-photo-gallery";

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
`;

// apply the correct animation based on the transition state class name.
export const GaleryContainer = styled(Page)`
  margin: 1rem auto;
  width: 100%;
  max-width: 960px;

  img {
    width: auto;
  }

  .gallery {
    justify-content: space-between;
  }

  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;

export const GalleryStyles = styled(Gallery)`
  div {
  }
`;
