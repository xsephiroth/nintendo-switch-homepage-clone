import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 100%;
`;

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;

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

  ${(props) =>
    props.text2X &&
    css`
      font-size: 1.8em;
    `}
`;

const EsrbLogo = styled.img.attrs({
  src: "https://www.nintendo.com/content/dam/noa/en_US/esrb/e/e.svg",
})`
  position: absolute;
  right: 1em;
  bottom: 1em;

  width: 3.2em;
`;

const ImgCard = ({ src, text, text2X = false, esrbLogo = false }) => {
  return (
    <StyledContainer>
      <StyledImg src={src} />
      {!!text && (
        <StyledOverlay text2X={text2X}>
          <span>{text}</span>
        </StyledOverlay>
      )}
      {esrbLogo && <EsrbLogo />}
    </StyledContainer>
  );
};

export default ImgCard;
