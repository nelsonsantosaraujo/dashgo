import { createServer, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750; // delay 750ms

      this.get('/users');
      this.post('/users');

      // Altera o namespace para vazio para não dar conflito com a API Root do Next
      this.namespace = '';
      // Faz com que se a chamada não for encontrada no mirage seja passada para os API Root do Next
      this.passthrough();
    }
  });

  return server;
}