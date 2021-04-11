import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

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

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 10);
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