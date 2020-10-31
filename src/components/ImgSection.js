import styled from "styled-components";

const StyledImgSection = styled.section`
  height: 30vw;
  max-height: 400px;
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;

  display: flex;
  justify-content: space-between;
`;

const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1em 0 0 2em;

  color: white;
  & h1 {
    font-size: 3em;
    font-weight: 400;
  }
  & b {
    font-size: 3em;
    font-weight: 900;
  }
  & p {
    color: inherit;
    text-decoration: none;
    margin-top: 10px;

    &::after {
      content: ">";
      margin-left: 10px;
    }
  }
`;

const ImgSection = ({ children, ...restProps }) => {
  return <StyledImgSection {...restProps}>{children}</StyledImgSection>;
};

ImgSection.Text = StyledTextSection;

export default ImgSection;
