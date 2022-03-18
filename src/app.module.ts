import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            typePaths: ['./**/*.gql'],
            driver: ApolloDriver,
        }),
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {}
