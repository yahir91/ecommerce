import { useState, useEffect } from "react";
import { Game } from "../../../app/api/game";
import GridGames from "../../Shared/GridGames/GridGames";

const gameCtrl = new Game();
const LatestGames = (props: any) => {
  const { title, limit = 9, platformId = null } = props;
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLatestPublished({
          limit,
          platformId,
        });
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [limit, platformId]);

  if (!games) return null;

  return (
    <div>
      <h2 style={{ paddingLeft: 30 }}>{title}</h2>
      <GridGames games={games} />
    </div>
  );
};

export default LatestGames;
