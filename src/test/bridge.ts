/**
 * Setfarm browser capture bridge.
 *
 * Exposes the runtime state and the action invocation surface required by the
 * runtime evidence contract:
 *  - global __SETFARM_TEST_BRIDGE__ with "states" and "invokeAction"
 *  - global __SETFARM_SCENARIO_MODE__ with value "manual"
 */
import type { GameRuntime } from '../game/game-runtime';

export interface SetfarmTestBridge {
  states: {
    STATE_APP_STATE: string;
    STATE_HIGH_SCORE: number | null;
  };
  invokeAction(actionId: string): boolean;
}

const BRIDGE_GLOBAL = '__SETFARM_TEST_BRIDGE__';
const SCENARIO_MODE_GLOBAL = '__SETFARM_SCENARIO_MODE__';

export function installTestBridge(runtime: GameRuntime): void {
  if (typeof window === 'undefined') return;
  const target = window as unknown as Record<string, unknown>;

  const bridge: SetfarmTestBridge = {
    get states() {
      const snapshot = runtime.getSnapshot();
      return {
        STATE_APP_STATE: snapshot.appState,
        STATE_HIGH_SCORE: snapshot.highScore,
      };
    },
    invokeAction(actionId: string): boolean {
      return runtime.invokeAction(actionId);
    },
  };

  target[BRIDGE_GLOBAL] = bridge;
  target[SCENARIO_MODE_GLOBAL] = 'manual';
}

export function uninstallTestBridge(): void {
  if (typeof window === 'undefined') return;
  const target = window as unknown as Record<string, unknown>;
  delete target[BRIDGE_GLOBAL];
  delete target[SCENARIO_MODE_GLOBAL];
}
