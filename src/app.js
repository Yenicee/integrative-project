import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import session from 'express-session';

const app = express();

try {
    await mongoose.connect('mongodb+srv://perezyenice:xVrnoKCVRND4yJTu@cluster47300ap.gehcely.mongodb.net/integrative-project?retryWrites=true&w=majority&appName=AtlasApp')
    console.log('BD connected');
} catch (error) {
    console.log(error.message);
}

//MECANISMo DE SESIONES
app.use(session({
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
        ttl: 50 //esto son segundos
    }),
    secret: 'integrative',
    resave: true,
    saveUninitialized: true,
}));

//ACA VAN TODA LAS RUTAS DE VIEWS Y HANDLEBARS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewRouter );
app.use('/api/user', userRouter);

app.listen(8080, () => console.log('escuchando el puerto'));
