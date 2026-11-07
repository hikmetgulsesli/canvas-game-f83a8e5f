/**
 * Product types for the canvas play game product.
 *
 * Bound product identities (do not rename):
 *  - STATE_APP_STATE        application state, initial value "idle"
 *  - STATE_HIGH_SCORE       domain state, initial value null
 *  - ENTITY_HIGH_SCORE      persisted entity with field "score"
 *  - PERSIST_HIGH_SCORE_STORAGE local storage policy with durability "reload"
 */

export type ProdCanvasGameAppState = 'idle' | 'playing';

export interface ProdCanvasGameSnapshot {
  /** STATE_APP_STATE */
  appState: ProdCanvasGameAppState;
  /** STATE_HIGH_SCORE */
  highScore: number | null;
}

/** ENTITY_HIGH_SCORE */
export interface HighScoreEntity {
  score: number;
}

/** PERSIST_HIGH_SCORE_STORAGE key binding. */
export const HIGH_SCORE_STORAGE_KEY = 'setfarm.canvas_game.high_score_storage.v1';

/** ACT_START_GAME */
export const START_GAME_ACTION_ID = 'ACT_START_GAME';

/** Generated local binding id of the start game control (start-game-1). */
export const START_GAME_CONTROL_LOCAL_ID = 'start-game-1';

/** CSLOT_START_GAME_START_BUTTON */
export const START_GAME_CONTROL_SLOT_ID = 'CSLOT_START_GAME_START_BUTTON';

/** ROUTE_PLAY_ROUTE */
export const PLAY_ROUTE_PATH = '/play';
