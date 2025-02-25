//   ______ ______           _____           _       _     //
//  |  ____|  ____|   /\    / ____|         (_)     | |    //
//  | |__  | |__     /  \  | (___   ___ ____ _ ____ | |_   //
//  |  __| |  __|   / /\ \  \___ \ / __|  __| |  _ \| __|  //
//  | |    | |____ / ____ \ ____) | (__| |  | | |_) | |    //
//  |_|    |______/_/    \_\_____/ \___|_|  |_|  __/| |    //
//                                            | |   | |    //
//                                            |_|   | |_   //
//       Website: https://feascript.com/             \__|  //

// Import loglevel - since it's using CommonJS exports, we need to import it as a namespace
import * as logModule from '../../third-party/loglevel.min.js';

// Access the main log object 
const log = logModule.default || logModule;

// Configure default log level (can be overridden)
log.setDefaultLevel(log.levels.INFO);

// Create namespace-specific loggers for different parts of the app
const loggers = {
  main: log.getLogger('FEAScript'),
  solver: log.getLogger('Solver'),
  mesh: log.getLogger('Mesh'),
  visualization: log.getLogger('Viz')
};

// Helper method to set all loggers to a specific level
export function setAllLogLevels(level) {
  Object.values(loggers).forEach(logger => logger.setLevel(level));
}

// Export the configured loggers
export default loggers;
