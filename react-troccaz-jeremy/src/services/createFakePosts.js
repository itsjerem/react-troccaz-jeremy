import { faker } from '@faker-js/faker';
import { createFakeUsers } from './createFakeUsers';


export const createFakePosts = (count) => Array.from(Array(count).keys()).map((id) => ({
    id: new Date().getTime() + id,
    description: faker.lorem.paragraph(),
    title: faker.lorem.sentence(),
    photo: faker.image.url(),
    user: createFakeUsers(1)[0],
}));