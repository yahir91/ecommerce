"use client";

import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";
import { Home } from "../../components/Home/index";
import { Separator } from "../../components/Shared/Separator/Separator";
import { Container } from "semantic-ui-react";
import BarTrust from "../../components/Shared/BarTrust/BarTrust";
import BannerAd from "../../components/Shared/BannerAd/BannerAd";

const platformsId = {
  playstation: 1,
  nintendo: 2,
  xbox: 3,
  pc: 4,
};

export default function HomePage() {
  return (
    <main>
      <BasicLayout isContainer>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" limit={6} />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator height={100} />

        <Container>
          <BannerAd
            title="Registrate y obten los mejores precios"
            subtitle="¡Compara con otros juegos y elige el tuyo!"
            btnTitle="Entrar ahora"
            btnLink="/account"
            image="/images/img01.png"
          />
        </Container>

        <Separator height={50} />

        <Container>
          <Home.LatestGames
            title="Nintendo"
            limit={3}
            platformId={platformsId.nintendo}
          />
        </Container>
      </BasicLayout>
    </main>
  );
}
