const {Router} = require('express');
const Spisok = require('../Models/Spisok');
const Uroki = require('../Models/Uroki');
const Shkaf = require('../Models/Shkaf');
const Holod = require('../Models/Holod');
const Jsnote = require('../Models/Jsnote');
const router = Router();


/*Список Покупок*/
router.get('/spisok', async (req, res) => {
    const spisok_s = await Spisok.find({}).lean();

    res.render('Spisok', {
        title: 'Список',
        isSpisok: true,
        spisok_s,
    })
});

router.post('/spisok', async (req, res) => {
    const spisok = new Spisok({
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity
    });

    await spisok.save();
    res.redirect('/spisok')
});

router.post('/complete', async (req, res) => {
    const spisok = await Spisok.findById(req.body.id);
    spisok.completed = !!req.body.completed;
    await spisok.save();
    res.redirect('/spisok')
});

router.post('/clear_spisok', async (req, res) => {
    Spisok.remove({}, function (err) {
    });
    res.redirect('/spisok')
});





/*Домашнее задание*/
router.get('/uroki', async (req, res) => {
    const uroki_s = await Uroki.find({}).lean();

    res.render('Uroki', {
        title: 'Задания',
        uroki_s,
        isUroki: true
    })
});

router.post('/uroki', async (req, res) => {
    const uroki = new Uroki({
        predmet: req.body.predmet,
        rabota: req.body.rabota,
        opisanie: req.body.opisanie,
        srok: req.body.srok
    });

    await uroki.save();
    res.redirect('/uroki')
});

router.post('/complete_u', async (req, res) => {
    const uroki = await Uroki.findById(req.body.id_u);
    uroki.completed_u = !!req.body.completed_u;
    await uroki.save();
    res.redirect('/uroki')
});

router.post('/clear_uroki', async (req, res) => {
    Uroki.remove({}, function (err) {
    });
    res.redirect('/uroki')
});





/*Содержимое шкафа*/
router.get('/shkaf', async (req, res) => {
    const shkaf_s = await Shkaf.find({}).lean();

    res.render('Shkaf', {
        title: 'Шкаф',
        isShkaf: true,
        shkaf_s,
    })
});

router.post('/shkaf', async (req, res) => {
    const shkaf = new Shkaf({
        gde: req.body.gde,
        type: req.body.type,
        brand: req.body.brand,
        razmer: req.body.razmer,
        kolvo: req.body.kolvo,
    });

    await shkaf.save();
    res.redirect('/shkaf')
});

router.post('/clear_shkaf', async (req, res) => {
    Shkaf.remove({}, function (err) {
    });
    res.redirect('/shkaf')
});






/*Содержимое холодильника*/
router.get('/holod', async (req, res) => {
    const holod_s = await Holod.find({}).lean();

    res.render('Holod', {
        title: 'Холодильник',
        isHolod: true,
        holod_s,
    })
});

router.post('/holod', async (req, res) => {
    const holod = new Holod({
        type: req.body.type,
        przv: req.body.przv,
        kpl: req.body.kpl,
        prpl: req.body.prpl,
    });

    await holod.save();
    res.redirect('/holod')
});

router.post('/clear_holod', async (req, res) => {
    Holod.remove({}, function (err) {
    });
    res.redirect('/holod')
});







/*Справочник по JS*/
router.get('/jsnote', async (req, res) => {
    const jsnote_s = await Jsnote.find({}).lean();

    res.render('Jsnote', {
        title: 'Справочник JS',
        isJsnote: true,
        jsnote_s,
    })
});

router.post('/jsnote', async (req, res) => {
    const jsnote = new Jsnote({
        command: req.body.command,
        library: req.body.library,
        whatdo: req.body.whatdo
    });

    await jsnote.save();
    res.redirect('/jsnote')
});

router.post('/clear_jsnote', async (req, res) => {
    Jsnote.remove({}, function (err) {
    });
    res.redirect('/jsnote')
});




module.exports = router;