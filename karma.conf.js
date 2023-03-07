module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/app/plant/plant.service.spec.ts'
    ],
    reporters: ['progress', 'kjhtml'],
    browsers: ['Chrome'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });
};
