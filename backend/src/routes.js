import { Router } from 'express';

const routes = new Router();

routes.post('/ongs', (req, res) =>{
  const data = req.body;

  console.log(data);
  res.json({ message: 'Hellow Omnistack' });
} 
)

export default routes;

