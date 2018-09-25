Following Demos of https://github.com/jscomplete/advanced-react

type nul> <filename>		(create a new file 'type' in Windows, 'touch' in Mac)

yarn add --dev eslint
yarn eslint --init (follow the prompt or add .eslintrc.js with sample configs from somewhere)
yarn add --dev eslint-plugin-react babel-eslint
yarn add express ejs
yarn add --dev react-test-renderer

"scripts": {
    "dev": "set NODE_PATH=./lib&& nodemon --exec babel-node lib/server.js",
    "webpack": "webpack -wd",
    "test": "jest --watchAll"
  },

Run: 
- yarn dev (to start the server)
- yarn webpack (to bundle the scripts)
- yarn test (to run the jest tests)

expect(<obj>).toMatchSnapshot(); 	(take a snapshot of the test object, if anything changed to it, tests will fail. If valid change, then type 'u' to update the snapshot with latest changes)

serverRender.js needs to import React and ReactDOMServer from 'react-dom/server' and the App component that needs to render to string. Then return as:
const serverRender = () => {
    return ( ReactDOMServer.renderToString(
        <App />
    ) );
};
