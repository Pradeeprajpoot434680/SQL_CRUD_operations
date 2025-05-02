import { getClient } from "../utils";

// Get all todos for a give user
// This needs to ensure that every user comes atleast once
async function getUserAndTodosWithJoin(userId: number) 
{
    const client = await getClient();

    const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;

    const res = await client.query(joinQuery, [userId]);
    const results = res.rows;

    console.log("User and Todos:", results);
}

getUserAndTodosWithJoin(1)

//left join right join full join 
// inner join(default) => should be in both the tables then print 
//full join => should be in atleast one table then it will print
//left => if entry for searching  it in the left then it will return it if not then return empty
//right join => opposite it