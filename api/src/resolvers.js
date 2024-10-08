const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      return prisma.user.create({
        data: {
          name,
          email,
        },
      });
    },
  },
};

module.exports = resolvers;
