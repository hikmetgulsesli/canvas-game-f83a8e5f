/**
 * Deterministic fixtures for the canvas play game product.
 */
import type { ProdCanvasGameSnapshot } from '../features/prod-canvas-game/prod-canvas-game.types';

/** Initial application snapshot (STATE_APP_STATE "idle", STATE_HIGH_SCORE null). */
export const PROD_CANVAS_GAME_INITIAL_SNAPSHOT: ProdCanvasGameSnapshot = {
  appState: 'idle',
  highScore: null,
};

/** Status message text bound to SURF_STATUS_MESSAGE. */
export const PROD_CANVAS_GAME_STATUS_TEXT = {
  idle: 'Ready to play',
  playing: 'Game started',
} as const;

/** Score display text bound to SURF_SCORE_DISPLAY. */
export function prodCanvasGameScoreText(highScore: number | null): string {
  return String(highScore ?? 0);
}
