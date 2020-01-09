const { exec } = require('child_process');

exec('git add .', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`git add command ran`)
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  
exec('git commit -m test', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`git commit command ran`)
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  
  exec('git push', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`git commit command ran`)
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });