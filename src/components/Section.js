import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  color: white;
  padding: 4em 0 0 2em;

  ${(props) =>
    props.full &&
    css`
      height: 30vw;
      max-height: 400px;
    `}

  ${(props) =>
    props.half &&
    css`
      height: 34vw;
      max-height: 420px;
    `}
`;

const StyledText = styled.p`
  margin-top: 1em;

  // title
  ${(props) =>
    props.title &&
    css`
      font-size: 3em;
      font-weight: 300;
      line-height: 1em;
      margin-top: 0;
    `}

  // bold
  ${(props) =>
    props.bold &&
    css`
      font-weight: 500;
    `}
`;

const Section = StyledContainer;

Section.Text = StyledText;

export default Section;
