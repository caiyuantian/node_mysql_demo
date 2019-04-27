# node_mysql_demo
A most simple node, express and mysql demo

1. Create Mysql database with table user
    table definition:
    id: int
    user_name: varchar(50）
    password: varch(50)
    
    insert a new record into table user
    {"id":1,
    "user_name":"admin",
    "password":"admin"}
2. User mysql user sa, password 123456
3. Create express project by 
    express node_mysql_demo
    cd express
    npm install
    npm install mysql
4. Create folder db
5. Create db config file config.js
6. Create db control file db.js
6. Update routes/index.js, to use api/v1.js
7. Create api v1 folder under folder routes
8. Create v1.js under folder routes/api/
9. Start the server by 
    npm start
10. Check result by opening this link in browser
    http://localhost:3000/api/v1/users/1
    
    this is the result from res.json()
