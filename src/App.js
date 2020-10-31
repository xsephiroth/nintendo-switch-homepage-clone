import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Grid from "./components/Grid";
import ImgSection from "./components/ImgSection";
import ImgCard from "./components/ImgCard";

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
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/paper-mario-and-the-origami-king/712x400_PMO_GameStoreHalf_v01.jpg"
            text="Available now"
            text2X
            esrbLogo
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/animal-crossing-new-horizons/712x400_ACNH_GameStoreHalf_v01.jpg"
            text="Available now"
            text2X
            esrbLogo
          />
        </Grid>
        <Grid cols={4}>
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/pokemon-sword-and-shield/354x198_PSword_GameStoreQuarter_v01.jpg"
            text="DLC available now"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/pokemon-sword-and-shield/354x198_PShield_GameStoreQuarter_v01.jpg"
            text="DLC available now"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/fortnite-nexus-war/354x198_gs_fortnite_nexuswar.jpg"
            text="New Season"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/super-smash-bros-ultimate/354x198_Smash_GameStoreQuarter_v02.jpg"
            text="Available now"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/breath-of-the-wild/354x198_ZeldaBreathofWild_v01.jpg"
            text="Available now"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/super-mario-party/354x198_SuperMarioParty_goldPoints_GameStoreQuarter_noRibbon.jpg"
            text="Available now"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/xenoblade-chronicles/354x198_GameStoreQuarter_x.jpg"
            text="Available now"
          />
          <ImgCard
            src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/club-house-games/354x198__GameStoreQuarter_games.jpg"
            text="Available now"
          />
        </Grid>
        <ImgSection
          backgroundColor="#ea0001"
          backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/new-releases/1180x500_NewReleases_Switch_7_2020_v01.jpg"
          link="https://foxmail.com"
        >
          <ImgSection.Text>
            <h1>New</h1>
            <b>Releases</b>
            <p>See the newest games for Nntendo Switch.</p>
          </ImgSection.Text>
        </ImgSection>
        <Grid cols={2} style={{ marginTop: "5px" }}>
          <ImgSection
            backgroundColor="#0126d7"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/best-sellers/585x420_BestSellers_12_2019_CuratedListPromo_v02.jpg"
            link="https://foxmail.com"
          >
            <ImgSection.Text>
              <h1>New</h1>
              <b>Releases</b>
              <p>See the newest games for Nntendo Switch.</p>
            </ImgSection.Text>
          </ImgSection>
          <ImgSection
            backgroundColor="#782769"
            backgroundImage="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/game/indie-games/585x420_indie_CuratedListPromo_v02.jpg"
            link="https://foxmail.com"
          >
            <ImgSection.Text>
              <h1>New</h1>
              <b>Releases</b>
              <p>See the newest games for Nntendo Switch.</p>
            </ImgSection.Text>
          </ImgSection>
        </Grid>
      </Layout>
    </>
  );
}

export default App;
