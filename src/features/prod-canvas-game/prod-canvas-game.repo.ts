/**
 * Persistence repository for ENTITY_HIGH_SCORE.
 *
 * Authority: AUTH_DATA_BROWSER_ORIGIN / PERSIST_HIGH_SCORE_STORAGE
 *  - key: setfarm.canvas_game.high_score_storage.v1
 *  - durability: reload
 *  - rehydration: initialization
 */
import { HIGH_SCORE_STORAGE_KEY, type HighScoreEntity } from './prod-canvas-game.types';

function getStorage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Writes the high score entity payload for the bound persistence policy. */
export function writeHighScore(score: number): void {
  const storage = getStorage();
  if (!storage) return;
  const payload: HighScoreEntity = { score };
  try {
    storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* persistence is best effort; the UI still reflects live application state */
  }
}

/** Reads the persisted high score entity payload, or null when absent/invalid. */
export function readHighScore(): number | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw) as Partial<HighScoreEntity> | null;
    if (!parsed || typeof parsed.score !== 'number' || !Number.isFinite(parsed.score)) return null;
    return parsed.score;
  } catch {
    return null;
  }
}

/** Clears the persisted high score payload. */
export function clearHighScore(): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(HIGH_SCORE_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
