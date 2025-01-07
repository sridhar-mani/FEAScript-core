## Contributing to FEAScript

Thank you for your interest in contributing! FEAScript is in early development, with continuous additions of new features and improvements. To ensure a smooth and collaborative development process, please review and follow the guidelines below.

## Contribution Guidelines

1. **Respect the existing coding style:** Observe the code near your intended changes and aim to preserve that style in your modifications.

2. **Recommended tools:**  
   We recommend using [Visual Studio Code](https://code.visualstudio.com/) with the [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for automatic code formatting. Additionally, use a **110-character line width** to maintain consistent formatting.

3. **Naming conventions:**  
   Use [camelCase](https://en.wikipedia.org/wiki/Camel_case) formatting for variable names throughout the code.

4. **Testing changes locally:**  
   Before submitting a pull request, test your modifications by running the FEAScript library from a local directory. For example, you can load the library in your HTML file as follows:

   ```javascript
   import { FEAScriptModel, plotSolution, printVersion } from "[USER_DIRECTORY]/FEAScript-core/src/index.js";
   ```

   FEAScript can be run on a local server. To start a local server, you can use [Python HTTP Server](https://docs.python.org/3/library/http.server.html):
      ```bash
      python -m http.server
      ```
   where the server will be available at `http://127.0.0.1:8000/`
   Static file server npm packages like [serve](https://github.com/vercel/serve#readme) and [Vite](https://vite.dev/) can also be used.
