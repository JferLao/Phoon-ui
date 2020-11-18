require('babel-regenerator-runtime');   //支持async和await
require('packages/theme-chalk/lib/index.css');

const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);