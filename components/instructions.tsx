import React from "react";
import GitHubButton from "react-github-btn";
import styles from "../styles/instructions.module.scss";
import Button from "./button";
import Score from "./score";
import Link from "next/link";

export default function Instructions() {
  const highscore =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("highscore") ?? "0")
      : 0;

  return (
    <div className={styles.instructions}>
      <Link href="/settings">
        <button className={styles.settings} id="settings">
          settings
        </button>
      </Link>
      <div className={styles.wrapper}>
        <h2>Place the cards on the line in the correct order by population.</h2>
        {
          <div className={styles.highscoreWrapper}>
            <Score score={highscore} title="Best streak" />
          </div>
        }
        <Link href="/game">
          <Button text="Start game" />
        </Link>
        <div className={styles.about}>
          <div>
            All data sourced from{" "}
            <a
              href="https://www.wikidata.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikidata
            </a>{" "}
            and{" "}
            <a
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            .
          </div>
          <div>
            Have feedback? Please report it on{" "}
            <a
              href="https://github.com/EdwardTheLegend/wikitrivia/issues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </div>
          <GitHubButton
            href="https://github.com/EdwardTheLegend/wikitrivia"
            data-size="large"
            data-show-count="true"
            aria-label="Star EdwardTheLegend/wikitrivia on GitHub"
          >
            Star
          </GitHubButton>
          <div>
            This game was forked from the original game by{" "}
            <a href="https://github.com/tom-james-watson/wikitrivia">
              Tom James Watson
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
