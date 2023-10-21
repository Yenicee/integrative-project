import { Router } from 'express';
//import productsModel from '../models/products.model';

const router = Router();

//SERVICIO PARA VISUALIZAR LA VISTA DE PRODUCTOS
router.get('/realTimesProducts', (req, res) => {
    res.render('realTimesProducts');
  });