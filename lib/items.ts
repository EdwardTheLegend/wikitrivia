import { Item, PlayedItem } from "../types/item";
import { createWikimediaImage } from "./image";

export function getRandomItem(deck: Item[], played: Item[]): Item {
  const playedPopulations = played.map((item): number => {
    // check if item is undefined
    if (item === undefined) {
      return 0;
    }
    return item.population;
  });

  const candidates = deck.filter((candidate) => {
    if (playedPopulations.includes(candidate.population)) {
      return false;
    }

    // iterate over all instance_of and check if it is a commune or a municipality
    for (const instance of candidate.instance_of) {
      if (instance.includes("commune") || instance.includes("municipality")) {
        return false;
      }
    }

    return true;
  });

  if (candidates.length === 0) {
    throw new Error("No item candidates");
  }

  return { ...candidates[Math.floor(Math.random() * candidates.length)] };
}

export function checkCorrect(
  played: PlayedItem[],
  item: Item,
  index: number
): { correct: boolean; delta: number } {
  const sorted = [...played, item].sort((a, b) => a.population - b.population);
  const correctIndex = sorted.findIndex((i) => {
    return i.id === item.id;
  });

  if (index !== correctIndex) {
    return { correct: false, delta: correctIndex - index };
  }

  return { correct: true, delta: 0 };
}

export function preloadImage(url: string): HTMLImageElement {
  const img = new Image();
  img.src = createWikimediaImage(url);
  return img;
}
