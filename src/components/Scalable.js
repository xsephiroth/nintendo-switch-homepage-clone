import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;

  background-color: ${(props) => props.backgroundColor};

  a {
    text-decoration: none;
  }
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

const Scalable = ({
  children,
  backgroundImage,
  backgroundColor,
  link = "https://www.nintendo.com/games/switch/",
}) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      <StyledBackground backgroundImage={backgroundImage} />
      <a href={link} target="_blank">
        <StyledMain>{children}</StyledMain>
      </a>
    </StyledContainer>
  );
};

export default Scalable;
