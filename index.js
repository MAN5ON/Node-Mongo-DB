const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/Route');


const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
/*для корректного запуска проектта нужно:
    1 - Подключить модули express, mongoose, nodemon
2 - Создать БД на сайте mongo.db;
3 - Ввести в mongodb+srv ссылку на кластер
*/
async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://admin:admin@cluster0-yxlkj.mongodb.net/subd',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            });
        app.listen(PORT, () => {
            console.log('Server has been started...')
        });
    } catch (e) {
        console.log(e)
    }
}

start();