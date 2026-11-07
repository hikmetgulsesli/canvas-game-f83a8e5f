/**
 * ACT_START_GAME — the closed product action implementation.
 *
 * Contract:
 *  - trigger: user (rendered control CSLOT_START_GAME_START_BUTTON)
 *  - navigation: stay (route /play is preserved)
 *  - state deltas:
 *      STATE_APP_STATE  set "playing"
 *      STATE_HIGH_SCORE set 0
 *  - persistence effects:
 *      PERSIST_HIGH_SCORE_STORAGE write ENTITY_HIGH_SCORE (field "score")
 */
import { START_GAME_ACTION_ID, type ProdCanvasGameSnapshot } from '../prod-canvas-game/prod-canvas-game.types';

export interface StartGameDependencies {
  /** Writes the high score entity payload for PERSIST_HIGH_SCORE_STORAGE. */
  persistHighScore(score: number): void;
}

/**
 * Applies the exact ACT_START_GAME state deltas and persistence effect and
 * returns the next application snapshot.
 */
export function startGame(
  current: ProdCanvasGameSnapshot,
  dependencies: StartGameDependencies,
): ProdCanvasGameSnapshot {
  const next: ProdCanvasGameSnapshot = {
    appState: 'playing',
    highScore: 0,
  };
  dependencies.persistHighScore(next.highScore as number);
  return next;
}

export { START_GAME_ACTION_ID };
