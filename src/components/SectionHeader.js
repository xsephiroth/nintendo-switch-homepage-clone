import { useState } from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.header`
  background-image: url("https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/games/secondary-nav-bg.png");
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  padding: 0.5em 1em;
  margin-bottom: 1.5em;
`;

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

const Logo = styled.div`
  color: orange;
`;

const Select = styled.div`
  background-color: #ff7d00;
  width: 60vw;
  height: 2.5em;
  padding: 0.3em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: white;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -11.5em;
  width: 100%;

  z-index: 99;
  background-color: #ff7d00;

  ul {
    list-style: none;
    text-align: center;
    color: white;
  }

  li {
    padding: 0.5em;
    &:hover {
      background-color: #f26c13;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Icon = styled.span`
  margin-top: 10px;
  border: 10px solid transparent;
  border-top-color: white;

  ${(props) =>
    props.active &&
    css`
      transform: rotate(180deg);
      margin-bottom: 20px;
    `}
`;

const SectionHeader = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(true);
  return (
    <StyledContainer>
      <StyledInner>
        <Logo>
          <h1>Game Store</h1>
        </Logo>
        <Select onClick={() => setIsOptionsOpen((v) => !v)}>
          <h4>Nintendo Switch Games</h4>
          <Icon active={isOptionsOpen} />
        </Select>
        {isOptionsOpen && (
          <OptionsWrapper>
            <ul>
              <li>
                <a href="https://www.nintendo.com/games/switch">
                  Nintendo Switch games
                </a>
              </li>
              <li>
                <a href="https://www.nintendo.com/games/switch">
                  Nintendo 3DS Games
                </a>
              </li>
              <li>
                <a href="https://www.nintendo.com/games/switch">All Games</a>
              </li>
              <li>
                <a href="https://www.nintendo.com/games/switch">
                  Sales and Deals
                </a>
              </li>
              <li>
                <a href="https://www.nintendo.com/games/switch">Coming Soon</a>
              </li>
            </ul>
          </OptionsWrapper>
        )}
      </StyledInner>
    </StyledContainer>
  );
};

export default SectionHeader;
