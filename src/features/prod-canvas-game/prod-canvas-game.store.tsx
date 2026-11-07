/**
 * React store for the canvas play game product.
 *
 * Exposes the live application snapshot (STATE_APP_STATE, STATE_HIGH_SCORE)
 * and the ACT_START_GAME invocation to the routed surfaces.
 */
import React, { createContext, useContext, useMemo, useSyncExternalStore } from 'react';
import { runtime } from '../../game/game-runtime';
import {
  START_GAME_ACTION_ID,
  type ProdCanvasGameSnapshot,
} from './prod-canvas-game.types';

export interface ProdCanvasGameStoreValue {
  snapshot: ProdCanvasGameSnapshot;
  /** Invokes ACT_START_GAME. */
  startGame(): void;
}

const ProdCanvasGameContext = createContext<ProdCanvasGameStoreValue | null>(null);

export function ProdCanvasGameProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const snapshot = useSyncExternalStore(runtime.subscribe, runtime.getSnapshot, runtime.getSnapshot);

  const value = useMemo<ProdCanvasGameStoreValue>(
    () => ({
      snapshot,
      startGame: () => {
        runtime.invokeAction(START_GAME_ACTION_ID);
      },
    }),
    [snapshot],
  );

  return React.createElement(ProdCanvasGameContext.Provider, { value }, children);
}

export function useProdCanvasGame(): ProdCanvasGameStoreValue {
  const value = useContext(ProdCanvasGameContext);
  if (!value) {
    throw new Error('PROD_CANVAS_GAME_STORE_MISSING');
  }
  return value;
}
