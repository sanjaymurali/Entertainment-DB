Entertainment-DB is part of a project submission by Sanjay Murali and Srijit Ravishankar
for CS5200 Introduction to Database Management.

Running the project:

1. NodeJS v4.5.x
2. MySQL
3. MySQL connector for NodeJS

PRE-REQUISITES:

1. NodeJS is to be installed.
2. MySQL is to be present in the system.

STEP 0: Import the "entertainmentdb.sql" to a database in MySQL.
STEP 1: Clone the repo and go to "server > database > dbconnection.js" to edit your credentials and the DB name
STEP 2: Go to "client > JS > main.js" Edit 'URL' to your server's IP address or URL
STEP 3: Go to your root folder where "package.json" exists and run command "npm install"
STEP 4: run command "npm install mysql"

To run use : node server/app.js or "npm start"

Login Credentials:

Administrator:
    Username: admin , password: admin

Moderator:
    Username: mod , password: mod

User:
    Username: user, password: user

If it says port is already taken , Follow the below steps:

1. Find the process that is blocking the port by : netstat -nlp | grep :3000
2. Copy the Process ID from */node that we got from above command.
     EX : 10196/node or 2442/node
3. Kill the process by : kill -9 pid
     EX: kill -9 10196 or kill -9 2442
4. Rerun the app.


Steps For a newly installed Ubuntu system:

1. sudo apt-get update
2. sudo apt-get install apache2
3. sudo nano /etc/apache2/apache2.conf
4. Add "ServerName <your ip>"
5. sudo apache2ctl configtest
6. sudo apt-get update
7. sudo apt-get install mysql-server
8. sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
9. sudo nano /etc/apache2/mods-enabled/dir.conf
10. put .php to first
11. sudo systemctl restart apache2
12. sudo systemctl status apache2
13 PhpMyadmin : sudo apt-get install phpmyadmin apache2-utils

Installing nodejs :

sudo apt-get install nodejs
sudo apt-get install npm
Setting path:  sudo ln -s /usr/bin/nodejs /usr/bin/node

