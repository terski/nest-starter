import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: 'dev.env', isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            typePaths: ['./**/*.gql'],
            driver: ApolloDriver,
        }),
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver, PrismaService],
})
export class AppModule {}
