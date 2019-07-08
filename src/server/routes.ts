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
        res.json((await db.Chirps.one(req.params.id)));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/api/chirps', async (req, res) => {   
    try {
        res.json((await db.Chirps.post(req.body.userid, req.body.chirp, req.body.location)));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/api/chirps/:id', async (req, res) => {   
    try {
        res.json((await db.Chirps.remove(req.params.id)));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/api/chirps/:id', async (req, res) => {   
    try {
        res.json((await db.Chirps.update(req.params.id, req.body.chirp)));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;