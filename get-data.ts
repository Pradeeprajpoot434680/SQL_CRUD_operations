import { getClient } from "./utils";

async function getUsers()
{
    const client = await getClient();
    const selectUsersText = 'SELECT * fROM users';
    const response = await client.query(selectUsersText);
    //it will return multiple rows
    console.log("Users:");
    for(let user of response.rows)
    {
        console.log(`ID " ${user.id} , Email: ${user.email}`);
        
    }
    
}

async function getUserFromEmail(email:string)
{
    const client = await getClient();
    const selectUsersText = 'SELECT * FROM users WHERE email= $1';
    const response = await client.query(selectUsersText,[email]);

    console.log("Single User detail:");
    for (let user of response.rows) 
    {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getTodosForUser(userId: number) 
{
    const client = await getClient();
    
    const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
    const todoRes = await client.query(selectTodosText, [userId]);
    
    console.log(`Todos for User ID ${userId}:`);
    for (let todo of todoRes.rows) 
    {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
    }
}

getUsers();
getUserFromEmail("pradeepkumar@gmail.com");
const userIdToFetch = 1;
getTodosForUser(userIdToFetch);