import 'reflect-metadata';
import { AppModule } from './app/app.module';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
    modules: [AppModule],
    context: session => session
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
