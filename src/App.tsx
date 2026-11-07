import React, { useEffect } from 'react';
import { PlayPageCanvasPlayGame } from './screens/PlayPageCanvasPlayGame';
import {
  ProdCanvasGameProvider,
  useProdCanvasGame,
} from './features/prod-canvas-game/prod-canvas-game.store';
import { runtime } from './game/game-runtime';
import { installTestBridge, uninstallTestBridge } from './test/bridge';
import {
  PROD_CANVAS_GAME_STATUS_TEXT,
  prodCanvasGameScoreText,
} from './__fixtures__/prod-canvas-game.fixture';
import { PLAY_ROUTE_PATH } from './features/prod-canvas-game/prod-canvas-game.types';

function PlayRoute(): React.ReactElement {
  const { snapshot, startGame } = useProdCanvasGame();

  useEffect(() => {
    installTestBridge(runtime);
    return () => uninstallTestBridge();
  }, []);

  // ROUTE_PLAY_ROUTE is the single product route; keep the browser location on
  // it so the observable "route unchanged" assertion is deterministic.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== PLAY_ROUTE_PATH) {
      window.history.replaceState(null, '', PLAY_ROUTE_PATH);
    }
  }, []);

  const statusText =
    snapshot.appState === 'playing'
      ? PROD_CANVAS_GAME_STATUS_TEXT.playing
      : PROD_CANVAS_GAME_STATUS_TEXT.idle;
  const scoreText = prodCanvasGameScoreText(snapshot.highScore);

  return (
    <div
      data-testid="setfarm-app-root"
      data-setfarm-root="play"
      className="min-h-screen bg-slate-950 text-slate-100"
    >
      <PlayPageCanvasPlayGame
        actions={{
          'start-game-1': () => {
            startGame();
          },
        }}
        statusText={statusText}
        scoreText={scoreText}
        sessionState={snapshot.appState}
      />
    </div>
  );
}

export default function App(): React.ReactElement {
  return (
    <ProdCanvasGameProvider>
      <PlayRoute />
    </ProdCanvasGameProvider>
  );
}
