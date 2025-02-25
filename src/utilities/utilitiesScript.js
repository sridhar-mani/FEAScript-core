//   ______ ______           _____           _       _     //
//  |  ____|  ____|   /\    / ____|         (_)     | |    //
//  | |__  | |__     /  \  | (___   ___ ____ _ ____ | |_   //
//  |  __| |  __|   / /\ \  \___ \ / __|  __| |  _ \| __|  //
//  | |    | |____ / ____ \ ____) | (__| |  | | |_) | |    //
//  |_|    |______/_/    \_\_____/ \___|_|  |_|  __/| |    //
//                                            | |   | |    //
//                                            |_|   | |_   //
//       Website: https://feascript.com/             \__|  //

import loggers from "./loggerScript.js";

const log = loggers.main;

/**
 * Function to handle version information and fetch the latest update date and release from GitHub
 */
export async function printVersion() {
  // log.info("Fetching latest FEAScript version information...");
  console.log("Fetching latest FEAScript version information...");
  try {
    // Fetch the latest commit date
    const commitResponse = await fetch("https://api.github.com/repos/FEAScript/FEAScript/commits/main");
    const commitData = await commitResponse.json();
    const latestCommitDate = new Date(commitData.commit.committer.date).toLocaleString();
    // log.info(`Latest FEAScript update: ${latestCommitDate}`);
    console.log(`Latest FEAScript update: ${latestCommitDate}`);
    return latestCommitDate;
  } catch (error) {
    // log.error("Failed to fetch version information:", error);
    console.error("Failed to fetch version information:", error);
    return "Version information unavailable";
  }
}

/**
 * Set the logging level for all loggers
 * @param {string} level - The log level to set (trace, debug, info, warn, error)
 */
export function setLogLevel(level) {
  // Logging is temporarily disabled
  // loggers.setAllLogLevels(level);
  // log.info(`Log level set to: ${level}`);
  console.log(`Log level set to: ${level} (logging temporarily disabled)`);
}
