const core = require('@actions/core');

try {
  const message = core.getInput('message');
  console.log(`Message from input: ${message}`);
  core.setOutput("result", `Printed: ${message}`);
} catch (error:any) {
  core.setFailed(`Action failed: ${error.message}`);
}