const webPackTest = require('./webpack.config.test.js');
module.exports = (config) => {
  config.set({
    files: [
      // all files ending in "spec.js"
      { pattern: './src/**/*.spec.js', watched: false }
      // each file acts as entry point for the webpack configuration
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      // add webpack as preprocessor
      './src/**/*.spec.js': ['webpack']
    },
    webpack: webPackTest,

    port: 9876,
    // Colors for output
    colors: true,
    logLevel: config.LOG_WARN,
    // check changes on the files
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    // not run test only once
    singleRun: false,
    reporters: [ 'coverage-istanbul' ],
    coverageIstanbulReporter: {
      dir: 'coverage',
      reports: [
        'html',
        'text-summary'
      ],
      fixWebpackSourcePaths: true
  },
  })
}