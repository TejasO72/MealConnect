import connectionpool from "../dbconfig/postgresconfig.js";

export const DonorCreation = async (email, password, phone, fullname) => {
    try {
        const result = await connectionpool.query(`INSERT INTO donors 
        (email, password, phone, fullname)
        VALUES ($1, $2, $3, $4)
        `, [email, password, phone, fullname]);
        return result;
    } catch (error) {
        console.log(error);
    }
}