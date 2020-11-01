import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Grid from "./components/Grid";
import Section from "./components/Section";
import Scalable from "./components/Scalable";
import Overlay from "./components/Overlay";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Grid cols={2}>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/paper-mario-and-the-origami-king/712x400_PMO_GameStoreHalf_v01.jpg">
            <Overlay text="Available now" esrbLogo />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/animal-crossing-new-horizons/712x400_ACNH_GameStoreHalf_v01.jpg">
            <Overlay text="Available now" esrbLogo />
          </Scalable>
        </Grid>
        <Grid cols={4}>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/pokemon-sword-and-shield/354x198_PSword_GameStoreQuarter_v01.jpg">
            <Overlay mini text="DLC Available now" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/pokemon-sword-and-shield/354x198_PShield_GameStoreQuarter_v01.jpg">
            <Overlay mini text="DLC available now" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/fortnite-nexus-war/354x198_gs_fortnite_nexuswar.jpg">
            <Overlay mini text="New Season" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/super-smash-bros-ultimate/354x198_Smash_GameStoreQuarter_v02.jpg">
            <Overlay mini text="Available now" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/breath-of-the-wild/354x198_ZeldaBreathofWild_v01.jpg">
            <Overlay mini text="Available now" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/super-mario-party/354x198_SuperMarioParty_goldPoints_GameStoreQuarter_noRibbon.jpg">
            <Overlay mini text="Available now" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/xenoblade-chronicles/354x198_GameStoreQuarter_x.jpg">
            <Overlay mini text="Available now" />
          </Scalable>
          <Scalable backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/club-house-games/354x198__GameStoreQuarter_games.jpg">
            <Overlay mini text="Available now" />
          </Scalable>
        </Grid>
        <Scalable
          backgroundColor="#ea0001"
          backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/new-releases/1180x500_NewReleases_Switch_7_2020_v01.jpg"
        >
          <Section full>
            <Section.Text title>New</Section.Text>
            <Section.Text title bold>
              Releases
            </Section.Text>
            <Section.Text>
              See the newest games for Nintendo Switch.
            </Section.Text>
          </Section>
        </Scalable>
        <Grid cols={2}>
          <Scalable
            backgroundColor="#0126d7"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/best-sellers/585x420_BestSellers_12_2019_CuratedListPromo_v02.jpg"
          >
            <Section half>
              <Section.Text title>Best-Selling</Section.Text>
              <Section.Text title bold>
                Games
              </Section.Text>
              <Section.Text>
                Find out which games are most popular with fans.
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#782769"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/indie-games/585x420_indie_CuratedListPromo_v02.jpg"
          >
            <Section half>
              <Section.Text title>Indie</Section.Text>
              <Section.Text title bold>
                Games
              </Section.Text>
              <Section.Text>
                Spotlight on some of the hottest indie games.
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#ea0001"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/family-fun-at-home/585x420_together_CuratedListPromo_v02.jpg"
          >
            <Section half>
              <Section.Text title>Family Fun at</Section.Text>
              <Section.Text title bold>
                Home
              </Section.Text>
              <Section.Text>
                Games you can play together with the whole family right now!
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#5a36cc"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/play-together-online/585x420_Online_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Play Together</Section.Text>
              <Section.Text title bold>
                Online
              </Section.Text>
              <Section.Text>
                These multiplayer games are perfect to play with friends,
                wherever they might be!
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#181741"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/games-for-core-gamers/585x420_AC_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Games for</Section.Text>
              <Section.Text title bold>
                Core Gamers
              </Section.Text>
              <Section.Text>
                Up for a challenge? Try out these intense titles for experienced
                gamers.
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#02833a"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/games-9-99-and-under/585x420_999games2020_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Nintendo Switch Games</Section.Text>
              <Section.Text title bold>
                $9.99 and under
              </Section.Text>
              <Section.Text>
                Got a Nintendo eShop Card? Make the omst of it.
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#0a5335"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/sonic-games/585x420_Template_CuratedListPromo_v02.jpg"
          >
            <Section half>
              <Section.Text title>Gotta go fast with</Section.Text>
              <Section.Text title bold>
                Sonic
              </Section.Text>
              <Section.Text>
                Celebrate Sonic with the blue speedster's greatest hits!
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#8c312c"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/rpg-games/585x420_RPGs_7_2019_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Great Role-playing</Section.Text>
              <Section.Text title bold>
                Games
              </Section.Text>
              <Section.Text>Epic quests await in these RPGs.</Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#e60e19"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/game/dspWLLXJS0vaqXej69iGZFORlSAGwYF1.jpg"
          >
            <Section half>
              <Section.Text title>Jump for joy with</Section.Text>
              <Section.Text title bold>
                Super Mario
              </Section.Text>
              <Section.Text>
                Speedrun through video game history with Mario's greatest hits!
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#221684"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/games-with-dlc/585x420_DLC_7_2019_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Games with</Section.Text>
              <Section.Text title bold>
                DLC
              </Section.Text>
              <Section.Text>
                Shop for games that have downloadable content (DLC).
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#03479c"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/games-with-demos/585x420_Demos_7_2019_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Games with</Section.Text>
              <Section.Text title bold>
                Demos
              </Section.Text>
              <Section.Text>
                Try before you buy with games that offer free demos.
              </Section.Text>
            </Section>
          </Scalable>
          <Scalable
            backgroundColor="#5e79d4"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/games-to-spark-creativity/585x420_CreativeGames_CuratedListPromo_v01.jpg"
          >
            <Section half>
              <Section.Text title>Games to Spark</Section.Text>
              <Section.Text title bold>
                Creativity
              </Section.Text>
              <Section.Text>
                Build worlds and break new ground at your own pace.
              </Section.Text>
            </Section>
          </Scalable>
        </Grid>
        <Scalable
          backgroundColor="#000"
          backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/all-games/1440x420_MK8_CuratedLanding_v01.jpg"
        >
          <Section full>
            <Section.Text title>Nintendo Switch</Section.Text>
            <Section.Text title bold>
              Games
            </Section.Text>
            <Section.Text>
              See the entire catalog of games available for Nintendo Switch.
            </Section.Text>
          </Section>
        </Scalable>
      </Layout>
    </>
  );
}

export default App;
