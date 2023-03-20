const express = require('express');
const router = express.Router();

const localss = express();

let entries = [];
localss.locals.entries = entries;

router.get('/', (req, res) => {
    res.render('index', {title: "Inicio", entries})
});
router.get('/new-entry', (req, res) => {
    res.render('new-entry', {title: "Nueva entrada"})
});

router.post('/new-entry', (req, res) => {
if (!req.body.title || !req.body.body) {
    res.send(400).send('Tarea deben tener un titulo y un cuerpo');
}

let newTask = {
    title: req.body.title,
    body: req.body.body,
    published: new Date(),
};

entries.push(newTask);

res.redirect('/');

});

module.exports = router;