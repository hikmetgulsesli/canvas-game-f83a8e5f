/**
 * Runtime state container for the canvas play game application.
 *
 * Holds the authoritative application state (STATE_APP_STATE, STATE_HIGH_SCORE),
 * the registered product actions and the subscription surface used by the
 * React store and by the Setfarm capture bridge.
 */
import { PROD_CANVAS_GAME_INITIAL_SNAPSHOT } from '../__fixtures__/prod-canvas-game.fixture';
import { startGame } from '../features/surf-play-page/act_start_game';
import { readHighScore, writeHighScore } from '../features/prod-canvas-game/prod-canvas-game.repo';
import {
  START_GAME_ACTION_ID,
  START_GAME_CONTROL_LOCAL_ID,
  type ProdCanvasGameSnapshot,
} from '../features/prod-canvas-game/prod-canvas-game.types';

export type RuntimeActionHandler = () => void;

export interface GameRuntime {
  getSnapshot(): ProdCanvasGameSnapshot;
  setSnapshot(next: ProdCanvasGameSnapshot): void;
  subscribe(listener: () => void): () => void;
  registerAction(actionId: string, handler: RuntimeActionHandler): void;
  invokeAction(actionId: string): boolean;
}

class Runtime implements GameRuntime {
  private snapshot: ProdCanvasGameSnapshot;

  private readonly listeners = new Set<() => void>();

  private readonly actions = new Map<string, RuntimeActionHandler>();

  constructor(initial: ProdCanvasGameSnapshot) {
    this.snapshot = initial;
  }

  getSnapshot = (): ProdCanvasGameSnapshot => this.snapshot;

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  setSnapshot = (next: ProdCanvasGameSnapshot): void => {
    if (next === this.snapshot) return;
    this.snapshot = next;
    this.listeners.forEach((listener) => listener());
  };

  registerAction = (actionId: string, handler: RuntimeActionHandler): void => {
    this.actions.set(actionId, handler);
  };

  invokeAction = (actionId: string): boolean => {
    const handler = this.actions.get(actionId);
    if (!handler) return false;
    handler();
    return true;
  };
}

/**
 * Creates the runtime, rehydrating the persisted high score at initialization
 * (PERSIST_HIGH_SCORE_STORAGE rehydration kind "initialization").
 */
export function createGameRuntime(): GameRuntime {
  const initial: ProdCanvasGameSnapshot = {
    appState: PROD_CANVAS_GAME_INITIAL_SNAPSHOT.appState,
    highScore: readHighScore(),
  };
  const runtime = new Runtime(initial);

  const handleStartGame = (): void => {
    runtime.setSnapshot(
      startGame(runtime.getSnapshot(), {
        persistHighScore: (score: number) => writeHighScore(score),
      }),
    );
  };

  runtime.registerAction(START_GAME_ACTION_ID, handleStartGame);
  runtime.registerAction(START_GAME_CONTROL_LOCAL_ID, handleStartGame);

  return runtime;
}

/** Application runtime singleton. */
export const runtime: GameRuntime = createGameRuntime();
