YourDatabaseName-DatabaseGranularAccess
Database Access using SQL Server Authentication
This guide provides step-by-step instructions on how to access the YourDatabaseName database using SQL Server Authentication. This method requires a username and password for authentication.

Prerequisites
SQL Server Management Studio (SSMS)
Database Credentials: Provided by your database administrator
Available Logins and Their Permissions
Original Login Credentials:

Username: Nalan
Password: Admin123
Access Level: Full administrative access (this should be confirmed with the DBA)
Granular Access Users:

readAll
Username: readAll
Password: Admin1234
Access Level: Read-only access to all tables
readOrders
Username: readOrders
Password: Admin1234
Access Level: Read-only access to the Orders table
readwriteAll
Username: readwriteAll
Password: Admin1234
Access Level: Read and write access to all tables
Connecting to the Database
1. Install SQL Server Management Studio (SSMS):
If you do not already have SSMS installed, download and install it from the official SQL Server Management Studio download page.
2. Open SQL Server Management Studio:
Launch SQL Server Management Studio from your applications or programs list.
3. Connect to the Database:
In the "Connect to Server" dialog box, fill out the following details:

Server Type: Database Engine
Server Name: siassignment.database.windows.net
Authentication: SQL Server Authentication
Login: (your username)
Password: (your password)
Additional Steps:

Click the "Options >>" button to expand connection properties.
Go to the "Additional Connection Parameters" tab.
In the text box, enter: Initial Catalog=YourDatabaseName; (replace YourDatabaseName with the actual name of your database).
4. Connect:
Click "Connect" to establish a connection to the database.
Database Operations
Once connected, you are ready to perform various operations:

Running Queries:
Open a new query by clicking "New Query."
Enter your SQL commands.
Execute the query to retrieve data or modify the database.
Managing Database Objects:
In "Object Explorer," expand the server and database nodes.
Right-click on tables, views, or stored procedures for management options.
Troubleshooting
If you cannot connect, ensure the server name and credentials are correct and that your network settings allow connections to the SQL Server.
Resources
For more information, visit the SQL Server Management Studio Documentation.
Should you need further assistance or have any questions, do not hesitate to reach out to your database administrator.

