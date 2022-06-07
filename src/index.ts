import bodyParser from 'body-parser';
import express from 'express';

import { router } from './__domain__/talker/routes/index.routes';

const app = express();
app.use(bodyParser.json());

app.use(router);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('🚀 Server running on port', 3000);
});
