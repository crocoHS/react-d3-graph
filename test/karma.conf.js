// @flow weak

const path = require('path');

const argv = process.argv.slice(2);
const opts = {
  grep: undefined,
  coverage: true,
};

argv.forEach((arg) => {
  if (/^--grep=/.test(arg)) {
    opts.grep = arg.replace('--grep=', '').trim();
    opts.coverage = false;
  }
});

// Karma configuration
module.exports = function createConfig(config) {
  config.set({
    autoWatch: false,
    basePath: '../',
    browsers: ['PhantomJS_Sized'],
    client: {
      mocha: {
        grep: opts.grep,
      },
    },
    colors: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern: 'test/karma.tests.js',
        watched: false,
        served: true,
        included: true,
      },
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
    ],
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      'test/karma.tests.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots'],
    singleRun: false,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
        ],
        noParse: [
          /node_modules\/sinon\//,
        ],
      },
      resolve: {
        alias: {
          resonance: path.resolve(__dirname, '../src'),
          sinon: 'sinon/pkg/sinon.js',
        },
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: [
          'node_modules',
          './',
        ],
      },
      externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window',
        'react/addons': true, // For enzyme
      },
    },
    webpackServer: {
      noInfo: true,
    },
    customLaunchers: {
      PhantomJS_Sized: {
        base: 'PhantomJS',
        options: {
          viewportSize: { // Matches JSDom size.
            width: 1024,
            height: 768,
          },
        },
      },
    },
  });
};
