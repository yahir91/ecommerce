"use client";

import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";
import { Home } from "../../components/Home/index";

export default function HomePage() {
  return (
    <main>
      <BasicLayout isContainer>
        <Home.BannerLastGamePublished />
        <h1>GAME SHOP</h1>
      </BasicLayout>
    </main>
  );
}
