import * as mysql from 'mysql';
import Chirps from './chirps';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'null',
    database: 'chirper'
});

//Makes Query to db
export const Query = (query: string, values?: any) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, [values], (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    Chirps
}