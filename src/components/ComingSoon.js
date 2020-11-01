import styled from "styled-components";
import Section from "./Section";
import Grid from "./Grid";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 5em;

  background-image: url(https://www.nintendo.com/content/dam/noa/en_US/merchandising/coming-soon/bravely-default/1440x400_Template_ComingSoon_v01.jpg);
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    background-size: auto;
  }
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledItem = styled.div`
  border-radius: 10px;
  padding: 0.8em 1.2em 0.3em;

  min-width: 20em;
  @media screen and (min-width: 960px) {
    max-width: 20em;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.45);
  transition: all 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .contents {
    color: white;
    h2 {
      font-size: 0.9em;
    }

    h3 {
      font-size: 0.8em;
    }

    p {
      font-size: 0.9em;
      margin-top: 1em;
      display: inline-block;
      border-bottom: solid 3px red;
    }
  }

  img {
    display: block;
    width: 5em;
  }
`;

const ComingSoon = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <Section.Text title>Coming</Section.Text>
        <Section.Text title bold>
          Soon
        </Section.Text>
        <Section.Text>Check out upcoming game releases.</Section.Text>
      </StyledSection>
      <Grid cols={2} style={{ gridGap: "0.5em", padding: "2em" }}>
        <StyledItem>
          <div className="contents">
            <h2>Pokémon Sword + Pokémon Sword Expansion Pass</h2>
            <h3>Releases Nov 06, 2020</h3>
            <p>Nintendo Swich</p>
          </div>
          <img
            src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-sword-and-pokemon-sword-expansion-pass-switch/Switch_PokemonSword-XP_box.png"
            alt=""
          />
        </StyledItem>
        <StyledItem>
          <div className="contents">
            <h2>Pokémon Sword + Pokémon Sword Expansion Pass</h2>
            <h3>Releases Nov 06, 2020</h3>
            <p>Nintendo Swich</p>
          </div>
          <img
            src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-sword-and-pokemon-sword-expansion-pass-switch/Switch_PokemonSword-XP_box.png"
            alt=""
          />
        </StyledItem>
        <StyledItem>
          <div className="contents">
            <h2>Pokémon Sword + Pokémon Sword Expansion Pass</h2>
            <h3>Releases Nov 06, 2020</h3>
            <p>Nintendo Swich</p>
          </div>
          <img
            src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-sword-and-pokemon-sword-expansion-pass-switch/Switch_PokemonSword-XP_box.png"
            alt=""
          />
        </StyledItem>
        <StyledItem>
          <div className="contents">
            <h2>Pokémon Sword + Pokémon Sword Expansion Pass</h2>
            <h3>Releases Nov 06, 2020</h3>
            <p>Nintendo Swich</p>
          </div>
          <img
            src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-sword-and-pokemon-sword-expansion-pass-switch/Switch_PokemonSword-XP_box.png"
            alt=""
          />
        </StyledItem>
      </Grid>
    </StyledContainer>
  );
};

export default ComingSoon;
