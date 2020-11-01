import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  display: relative;
  height: 27vw;
  max-height: 400px;

  ${(props) =>
    props.mini &&
    css`
      height: 13.3vw;
      max-height: 200px;
    `}
`;

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 7vw;
  font-size: 2em;
  ${(props) =>
    props.mini &&
    css`
      height: 5vw;
      font-size: 1em;
    `}

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: white;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  padding-top: 0.5rem;
  padding-left: 0.8rem;
  line-height: 2em;
`;

const EsrbLogo = styled.img.attrs({
  src: "https://www.nintendo.com/content/dam/noa/en_US/esrb/e/e.svg",
})`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  width: 3.2rem;
`;

const Overlay = ({ text, mini, esrbLogo = false }) => {
  return (
    <StyledContainer mini={mini}>
      <StyledOverlay mini={mini}>
        {text}
        {esrbLogo && <EsrbLogo />}
      </StyledOverlay>
    </StyledContainer>
  );
};

export default Overlay;
