const { exec } = require('child_process');

function runTerminalCommand(command, desc){
    exec(command, (error) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`git ${desc} command ran`)
      });

}

runTerminalCommand('git add .', 'add')
runTerminalCommand('git commit -m test4', 'commit')
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