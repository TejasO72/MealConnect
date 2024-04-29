import connectionpool from "../dbconfig/postgresconfig.js";

export const QueryStore = async (email, query) => {
    try {
        const result = await connectionpool.query('INSERT INTO queries (email, query) VALUES ($1, $2)', [email, query]);
        return result;
    } catch (error) {
        console.log(error);
    }
}