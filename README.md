# Following Demos of <https://github.com/jscomplete/advanced-react>

yarn add --dev eslint
yarn eslint --init             (follow the prompt or add .eslintrc.js with sample configs from somewhere)
yarn add --dev eslint-plugin-react babel-eslint
yarn add express ejs
yarn add --dev react-test-renderer
yarn add --dev enzyme enzyme-adapter-react-16        (shallow rendering need extra configuration with React 16.x see: <http://airbnb.io/enzyme/docs/installation/index.html)>
yarn upgrade-interactive    (lists all packages need upgrading)
yarn add --dev react-addons-perf    (Performance tools addon; does not work with React 16.x)

    "scripts": {
        "dev": "set NODE_PATH=./lib&& nodemon --exec babel-node lib/server.js",
        "webpack": "webpack -wd",
        "test": "jest --watchAll",
        "verify-tests": "jest --coverage"
      },

### RUN
- yarn dev (to start the server)
- yarn webpack (to bundle the scripts)
- yarn test (to run the jest tests)

expect(obj).toMatchSnapshot(); 	(take a snapshot of the test object, if anything changed to it, tests will fail. If valid change, then type 'u' to update the snapshot with latest changes)

serverRender.js needs to import React and ReactDOMServer from 'react-dom/server' and the App component that needs to render to string. Then return as:

    const serverRender = () => {
        return ( ReactDOMServer.renderToString(
            <App />
        ) );
    };

import React, {PureComponent} from 'react'; 		(Always use PureComponent unless you've a reason not to.)

### TIPS:
*type nul> filename*		(create a new file 'type' in Windows, 'touch' in Mac)
append "**?react_perf**" at the end of url to track performance of the react app
With "*react-addons-perf*" (does not work with React 16.x) Perf as window obj, can check in chrome console:

     Perf.start();
     Perf.stop();
     Perf.printWasted();

 - Function components will always rerender so it's bad idea to use it
   if you don't need to rerender all the time. Use PureComponent
   instead.
  -  Always use PureComponent unless you have a reason not to.
  -  Avoid function components unless you are using higher order    components that optimise the performance of function components. eg.  ok to use with React Redux since they are going to optimise the performance otherwise use PureComponents

