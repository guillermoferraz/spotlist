
import bcrypt from "bcrypt";

const hashPassword = async (password: string) => {
    const saltrounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltrounds);
    return hashedPassword;
}
export default hashPassword;
