import React, { useState } from "react";
import axios from "axios";
import { GameState } from "../types/game";
import { Item } from "../types/item";
import createState from "../lib/create-state";
import Board from "../components/board";
import Loading from "../components/loading";
import badCards from "../lib/bad-cards";

export default function Game() {
  const [state, setState] = useState<GameState | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState<Item[] | null>(null);

  React.useEffect(() => {
    const fetchGameData = async () => {
      // pick a random integer between 0 and 4
      const random = Math.floor(Math.random() * 5);
      const res = await axios.get<string>(
        // use the random integer to pick an items.json file
        `https://wikitrivia-data.pages.dev/items${random}.json`
      );
      const items: Item[] = res.data
        .trim()
        .split("\n")
        .map((line) => {
          return JSON.parse(line);
        })
        // Filter cards which have bad data
        .filter((item) => !(item.id in badCards));
      setItems(items);
    };

    fetchGameData();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (items !== null) {
        setState(await createState(items));
        setLoaded(true);
      }
    })();
  }, [items]);

  const resetGame = React.useCallback(() => {
    (async () => {
      if (items !== null) {
        setState(await createState(items));
      }
    })();
  }, [items]);

  const [highscore, setHighscore] = React.useState<number>(
    (typeof window !== "undefined") ? Number(localStorage.getItem("highscore") ?? "0") : 0
  );

  const updateHighscore = React.useCallback((score: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("highscore", String(score));
      setHighscore(score);
    }
  }, []);

  if (!loaded || state === null) {
    return <Loading />;
  }

  return (
    <Board
      highscore={highscore}
      state={state}
      setState={setState}
      resetGame={resetGame}
      updateHighscore={updateHighscore}
    />
  );
}
