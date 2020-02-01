for it to work on my cpu type 'acommit'
how do i get the commit messages in the console 
like if i actually typed the command

for authentication:
if not run git config --global user.email to get the email associated with the address, create a number either 
a static one or do a random one with Math.floor(Math.random()*(999999-100000+1)+100); and use either twilio or an email api to email
that email address
make the program stop and have the user input that variable before it continues to run: if the input is incorrect
kill the program and don't make any commits if successful run the rest of the program

I intend to make this command an alias but if it's an alias 
i'm not sure how i'll be able to access process.argv[2] to make my commit 
messages

to run the script globally type "node path to file" for me that looks like:
node /Users/rakimcraig/Documents/projects/node/githubCommitAutomated/index.js

to make this script an alias:
sudo nano .bash_profile    
type in: alias (whatever you want you alias to be)='script or command you want to run'
example: alias acommit= 'node /Users/rakimcraig/Documents/projects/node/githubCommitAutomated/index.js'
ctrl x 
hit the option to save
close the terminal
you should be able to run your command anywhere

this is good because of the podcast I listened to about the xbox kids hacking the devs github