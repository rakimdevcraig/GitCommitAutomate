const { execSync } = require('child_process');
const readline = require('readline');

function runTerminalCommand(command, desc) {
  execSync(command, (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
  console.log(`git ${desc} command ran`)
}
function userInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter a commit message ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Your commit message will be: ${answer}`);

    runTerminalCommand('git add .', 'add')
    runTerminalCommand(`git commit -m "${answer}"`, 'commit')
    runTerminalCommand('git push', 'push')
    rl.close();
  });
}
userInput()









