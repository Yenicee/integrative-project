//ACA SOLO RUTAS QUE VOY A TRABAJAR CON VISTAS HANDLEBARS
import { Router } from "express";

const router = Router();

const publicAccess = (req, res, next) => {
    if (req.user)
        return res.redirect('/')
    next();
}

const privateAcess = (req, res, next) => {
    if (!req.user)
        return res.redirect('/login');
    next();
}

//ruta para el register
router.get('/register', publicAccess, (req, res) => {
    res.render('register');
});

router.get('/login', publicAccess, (req, res) => {
    res.render('login');
});

router.get('/', privateAcess, (req, res) => {
    res.render('realTimesProducts', {
        user: req.user
    })

});

router.get('/realTimesProducts', (req, res) => {
    res.render('realTimesProducts');
});


export default router;


