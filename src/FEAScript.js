//   ______ ______           _____           _       _     //
//  |  ____|  ____|   /\    / ____|         (_)     | |    //
//  | |__  | |__     /  \  | (___   ___ ____ _ ____ | |_   //
//  |  __| |  __|   / /\ \  \___ \ / __|  __| |  _ \| __|  //
//  | |    | |____ / ____ \ ____) | (__| |  | | |_) | |    //
//  |_|    |______/_/    \_\_____/ \___|_|  |_|  __/| |    //
//                                            | |   | |    //
//                                            |_|   | |_   //
//       Website: https://feascript.com/             \__|  //

import { assembleSolidHeatTransferMat } from "./solvers/solidHeatTransferScript.js";
import loggers from "./utilities/loggerScript.js";

const log = loggers.main;

/**
 * FEAScript: An open-source finite element simulation library developed in JavaScript
 * @param {string} solverConfig - Parameter specifying the type of solver
 * @param {object} meshConfig - Object containing computational mesh details
 * @param {object} boundaryConditions - Object containing boundary conditions for the finite element analysis
 * @returns {object} An object containing the solution vector and additional mesh information
 */
export class FEAScriptModel {
  constructor() {
    this.solverConfig = null;
    this.meshConfig = {};
    this.boundaryConditions = {};
    this.solverMethod = "lusolve"; // Default solver method
    log.info("FEAScriptModel instance created");
  }

  setSolverConfig(solverConfig) {
    this.solverConfig = solverConfig;
    log.debug(`Solver config set to: ${solverConfig}`);
  }

  setMeshConfig(meshConfig) {
    this.meshConfig = meshConfig;
    log.debug(`Mesh config set with dimensions: ${meshConfig.meshDimension}, elements: ${meshConfig.numElementsX}x${meshConfig.numElementsY || 1}`);
  }

  addBoundaryCondition(boundaryKey, condition) {
    this.boundaryConditions[boundaryKey] = condition;
    log.debug(`Boundary condition added for key: ${boundaryKey}, type: ${condition[0]}`);
  }

  setSolverMethod(solverMethod) {
    this.solverMethod = solverMethod;
    log.debug(`Solver method set to: ${solverMethod}`);
  }

  solve() {
    if (!this.solverConfig || !this.meshConfig || !this.boundaryConditions) {
      const error = "Solver config, mesh config, and boundary conditions must be set before solving.";
      log.error(error);
      throw new Error(error);
    }

    let jacobianMatrix = []; // Jacobian matrix
    let residualVector = []; // Galerkin residuals
    let solutionVector = []; // Solution vector
    let nodesCoordinates = {}; // Object to store x and y coordinates of nodes

    // Assembly matrices
    log.info("Beginning matrix assembly...");
    console.time("assemblyMatrices");
    if (this.solverConfig === "solidHeatTransferScript") {
      log.info(`Using solver: ${this.solverConfig}`);
      ({ jacobianMatrix, residualVector, nodesCoordinates } = assembleSolidHeatTransferMat(
        this.meshConfig,
        this.boundaryConditions
      ));
    }
    console.timeEnd("assemblyMatrices");
    log.info("Matrix assembly completed");

    // System solving
    log.info(`Solving system using ${this.solverMethod}...`);
    console.time("systemSolving");
    if (this.solverMethod === "lusolve") {
      solutionVector = math.lusolve(jacobianMatrix, residualVector); // Solve the system of linear equations using LU decomposition
    }
    console.timeEnd("systemSolving");
    log.info("System solved successfully");

    // Return the solution matrix and nodes coordinates
    return {
      solutionVector,
      nodesCoordinates,
    };
  }
}
