import { faker } from '@faker-js/faker';

export const createFakeUsers = (count) => Array.from(Array(count).keys()).map((id) => ({
    // id: faker.datatype.uuid(), deprecié
    id: new Date().getTime() + id,
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
}));