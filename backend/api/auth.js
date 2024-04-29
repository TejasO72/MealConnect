import connectionpool from "../dbconfig/postgresconfig.js";
import bcrypt from 'bcrypt';

export const DonorCreation = async (email, password, phone, fullname) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await connectionpool.query(`INSERT INTO donors 
        (email, password, phone, fullname)
        VALUES ($1, $2, $3, $4)
        `, [email, hashedPassword, phone, fullname]);
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const DonorLogin = async (email, password) => {
    try {
        const result = await connectionpool.query(`SELECT password FROM donors WHERE email = $1`, [email]);

        if (result.rows.length > 0) {
            const donor = result.rows[0];
            const isPasswordMatch = await bcrypt.compare(password, donor.password);
            if (isPasswordMatch) {
                return donor;
            } else {
                return null;
            }
        } else {
            return null; // No user found with the provided email
        }

    } catch (error) {
        console.log(error);
    }
}
