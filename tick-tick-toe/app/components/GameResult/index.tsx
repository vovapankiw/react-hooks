import { GameState, GameResult } from "@/app/types/gameResult";
import { Player } from "@/app/types/player";

type Props = {
  state: GameState;
  currPlayer: Player;
};

export default function GameResults({ state, currPlayer }: Props) {
  if (state.result === GameResult.Win) {
    return <h2>Game winner {state.winner} 🎉</h2>;
  }

  if (state.result === GameResult.Draw) {
    return <h2>Draw</h2>;
  }

  return <h2>Next player {currPlayer}</h2>;
}
