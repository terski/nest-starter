import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    @Query()
    hello() {
        return { greeting: 'Hello from NestJS' };
    }
}
