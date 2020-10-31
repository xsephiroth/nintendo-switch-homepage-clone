import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledImg = styled.img`
  width: 100%;
`;

const ImgCard = ({ src }) => {
  return (
    <StyledContainer>
      <StyledImg src={src} />
    </StyledContainer>
  );
};

export default ImgCard;
