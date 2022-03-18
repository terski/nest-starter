import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from './prisma/prisma.service';

@Resolver()
export class AppResolver {
    constructor(private readonly db: PrismaService) {}

    @Query()
    async hello() {
        const user = await this.db.user.findFirst({});

        return { greeting: 'Hello from NestJS ' + user.name };
    }
}
