import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;

  background-color: ${(props) => props.backgroundColor};
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;

  transition: all 1s;

  ${StyledContainer}:hover & {
    transform: scale(1.08);
  }
`;

const StyledMain = styled.main`
  position: relative;
`;

const Scalable = ({ children, backgroundImage, backgroundColor }) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      <StyledBackground backgroundImage={backgroundImage} />
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  );
};

export default Scalable;
