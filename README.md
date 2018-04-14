# treeshaking-issue
A project for resolving a question posted on SO.
https://stackoverflow.com/questions/49830103/tree-shaking-doesnt-work-with-babel-loader-in-webpack-4


This is due to not setting NODE_ENV=production in the build script. The react-hot-loader keys off of that.
