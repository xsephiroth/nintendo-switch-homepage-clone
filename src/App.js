import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Grid from "./components/Grid";
import ImgCard from "./components/ImgCard";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Grid cols={2}>
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/paper-mario-and-the-origami-king/712x400_PMO_GameStoreHalf_v01.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/animal-crossing-new-horizons/712x400_ACNH_GameStoreHalf_v01.jpg" />
        </Grid>
        <Grid cols={4}>
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/pokemon-sword-and-shield/354x198_PSword_GameStoreQuarter_v01.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/pokemon-sword-and-shield/354x198_PShield_GameStoreQuarter_v01.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/fortnite-nexus-war/354x198_gs_fortnite_nexuswar.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/super-smash-bros-ultimate/354x198_Smash_GameStoreQuarter_v02.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/breath-of-the-wild/354x198_ZeldaBreathofWild_v01.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/super-mario-party/354x198_SuperMarioParty_goldPoints_GameStoreQuarter_noRibbon.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/xenoblade-chronicles/354x198_GameStoreQuarter_x.jpg" />
          <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/cta-tile/switch/club-house-games/354x198__GameStoreQuarter_games.jpg" />
        </Grid>
        <ImgCard src="https://www.nintendo.com/content/dam/noa/en_US/merchandising/curated-list/switch/new-releases/1180x500_NewReleases_Switch_7_2020_v01.jpg" />
      </Layout>
    </>
  );
}

export default App;
