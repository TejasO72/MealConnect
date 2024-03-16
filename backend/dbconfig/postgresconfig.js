import pkg from 'pg';
const { Pool } = pkg;
const connectionpool = new Pool({
    user: 'postgres',
    host: 'localhost', // or your Docker container's IP address if running in Docker
    database: 'MealConnect',
    password: 'foodcontainer',
    port: 5432,
})

export default connectionpool;