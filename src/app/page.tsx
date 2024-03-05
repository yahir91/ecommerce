"use client";

import "@/scss/global.scss";
import { Button } from "semantic-ui-react";
import { TurnOffDefaultPropsWarning } from "../components/Error/Error";

export default function Home() {
  return (
    <main>
      <TurnOffDefaultPropsWarning />
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <h1>GAME SHOP</h1>
    </main>
  );
}
