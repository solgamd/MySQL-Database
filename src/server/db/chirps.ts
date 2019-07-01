import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');
const one = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const post = (userid: number, chirp: string, location: string) => 
    Query('INSERT INTO chirps WHERE userid = ? AND WHERE chirp = ? AND WHERE location = ?)', [userid, chirp, location]);


export default {
    all,
    one,
    post
}