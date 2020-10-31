import styled, { css } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 5px;

  ${(props) =>
    props.cols &&
    css`
      grid-template-columns: repeat(${props.cols}, 1fr);
    `}
`;

export default Grid;
