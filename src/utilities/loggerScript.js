//   ______ ______           _____           _       _     //
//  |  ____|  ____|   /\    / ____|         (_)     | |    //
//  | |__  | |__     /  \  | (___   ___ ____ _ ____ | |_   //
//  |  __| |  __|   / /\ \  \___ \ / __|  __| |  _ \| __|  //
//  | |    | |____ / ____ \ ____) | (__| |  | | |_) | |    //
//  |_|    |______/_/    \_\_____/ \___|_|  |_|  __/| |    //
//                                            | |   | |    //
//                                            |_|   | |_   //
//       Website: https://feascript.com/             \__|  //

// TEMPORARILY DISABLED LOGLEVEL IMPORT DUE TO MODULE LOADING ISSUES
// import * as logModule from '../../third-party/loglevel.min.js';
// const log = logModule.default || logModule;

// Create a simple no-op logger to replace loglevel temporarily
const createNoOpLogger = (name) => {
  return {
    name,
    trace: () => {},
    debug: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
    setLevel: () => {},
  };
};

// Mock loggers with no-op functions
const loggers = {
  main: createNoOpLogger("FEAScript"),
  solver: createNoOpLogger("Solver"),
  mesh: createNoOpLogger("Mesh"),
  visualization: createNoOpLogger("Viz"),
};

// Helper method (no-op)
export function setAllLogLevels() {
  // No-op function
}

// Export the mock loggers
export default loggers;
