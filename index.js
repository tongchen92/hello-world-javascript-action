const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)

//   let student = { 
//       name: 'Mike',
//       age: 23, 
//       gender: 'Male',
//       department: 'English',
//       car: 'Honda' 
//   };
   
//   let data = JSON.stringify(student);
  core.setOutput("test", "test data");
} catch (error) {
  core.setFailed(error.message);
}