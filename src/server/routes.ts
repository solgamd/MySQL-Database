import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/chirps', async (req, res) => {
    try {
        res.json(await db.Chirps.all());
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/api/chirps/:id', async (req, res) => {   
    try {
        res.json((await db.Chirps.one(req.params.id))[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// router.post('/api/chirps', async (req, res) => {   
//     try {
//         res.json((await db.Chirps.one(req.params.id))[0]);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

export default router;