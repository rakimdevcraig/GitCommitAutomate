// node /Users/rakimcraig/Documents/projects/node/githubCommitAutomated/index.js

const { execSync } = require('child_process');

function runTerminalCommand(command, desc){
    execSync(command, (error) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
      });
      console.log(`git ${desc} command ran`)

}

runTerminalCommand('git add .', 'add')
runTerminalCommand('git commit -m "making the function run synchronously"', 'commit')
runTerminalCommand('git push', 'push')





// exec('git add .', (error) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`git add command ran`)
//   });
  
// exec('git commit -m test', (error) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`git commit command ran`)
//   });
  
//   exec('git push', (error) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`git push command ran`)
//   });