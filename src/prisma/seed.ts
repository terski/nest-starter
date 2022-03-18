import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const seed = async (): Promise<void> => {
    await Promise.all(
        [{ email: 'matt@foo.com', name: 'matt' }].map((user) =>
            db.user.upsert({
                where: { email: user.email },
                create: { name: user.name, email: user.email },
                update: {},
            }),
        ),
    );
};

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
