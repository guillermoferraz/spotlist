import { compare } from 'bcrypt';

const comparePassword = (password: string, hash: string) => {
    /**
     * password = password entry from input login ( plain text )
     * hash = password form db ( hashed )
     */
    try {
        const result = compare(password, hash) || false;
        return result;
    } catch (err) {
        console.error(err);
    }
}
export default comparePassword