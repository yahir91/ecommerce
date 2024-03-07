"use client";

import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";
import { Home } from "../../components/Home/index";
import { Separator } from "../../components/Shared/Separator/Separator";
import { Container } from "semantic-ui-react";
import BarTrust from "../../components/Shared/BarTrust/BarTrust";

export default function HomePage() {
  return (
    <main>
      <BasicLayout isContainer>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>
        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />
      </BasicLayout>
    </main>
  );
}
