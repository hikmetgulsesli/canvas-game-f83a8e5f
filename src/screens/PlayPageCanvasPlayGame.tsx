// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Play Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasPlayGameActionId = "start-game-1";

export interface PlayPageCanvasPlayGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasPlayGameActionCallbacks = NonNullable<PlayPageCanvasPlayGameProps["actions"]>;

export function PlayPageCanvasPlayGame({ actions }: PlayPageCanvasPlayGameProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_ROUTE_UNCHANGED">
          {/* Header bar */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm tracking-wider">
                CP
              </div>
              <div>
                <h1 className="text-base font-semibold text-slate-100 leading-tight">Canvas Play Game</h1>
                <p className="text-xs text-slate-400">Browser arcade environment</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Route: /play</span>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-8 flex flex-col gap-6 justify-center">
            {/* Status & Controls HUD Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Status Message Surface */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-center shadow-lg shadow-black/20">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Status</span>
                <div data-surface-id="SURF_STATUS_MESSAGE" className="text-lg font-semibold text-emerald-400 flex items-center gap-2" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_STATUS_TEXT">Ready to play</div>
              </div>
      
              {/* Score Display Surface */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-center shadow-lg shadow-black/20">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Score</span>
                <div data-surface-id="SURF_SCORE_DISPLAY" className="text-2xl font-mono font-bold text-slate-100 tracking-tight" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_SCORE_VALUE">0</div>
              </div>
      
              {/* Start Game Control Surface/Container */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center justify-center shadow-lg shadow-black/20">
                <button data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full h-full min-h-[48px] bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 cursor-pointer" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABLE" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  Start game
                </button>
              </div>
            </div>
      
            {/* Game Canvas Container Surface */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-3 border-b border-slate-800/80 mb-4 px-1">
                <span>Viewport: 960x480</span>
                <span>Engine: HTML5 Canvas 2D</span>
              </div>
      
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full aspect-[2/1] bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-center relative overflow-hidden group" data-setfarm-element-ref="E000005">
                {/* Canvas Standby Visual Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-slate-500 shadow-inner">
                    <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-400 mb-1">Game canvas standby</p>
                  <p className="text-xs text-slate-600 max-w-sm">Canvas arena is initialized and awaiting session launch</p>
                </div>
      
                {/* Decorative subtle grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
              </div>
      
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/80 mt-4 px-1">
                <span>Press Start game to begin session</span>
                <span>High scores saved to browser storage</span>
              </div>
            </div>
          </main>
      
          {/* Footer */}
          <footer className="border-t border-slate-900 py-4 px-8 text-center text-xs text-slate-500">
            Canvas Play Game © 2025. All rights reserved.
          </footer>
        </div>
    </>
  );
}
