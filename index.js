const reporter = require("cucumber-html-reporter");

const options = {
    "theme": "bootstrap",
    "jsonFile": "report/cucumber_report.json",
    "output": "report/cucumber_report.html",
    "reportSuiteAsScenarios": true,
    "launchReport": true,
    "metadata": {
        "App Version":"0.1.0",
        "Test Environment": "Test",
        "Platform": "Local",
        "Parallel": "Scenarios",
        "Executed": "Remote",
    },
};

reporter.generate(options);
