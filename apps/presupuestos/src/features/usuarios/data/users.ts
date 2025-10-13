import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

export const users = Array.from({ length: 500 }, () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    username: faker.internet
      .username({ firstName, lastName })
      .toLocaleLowerCase(),
    email: faker.internet.email({ firstName }).toLocaleLowerCase(),
    phoneNumber: faker.phone.number({ style: 'international' }),
    status: faker.helpers.arrayElement([
      'habilitado',
      'deshabilitado',
    ]),
    role: faker.helpers.arrayElement([
      'supervisor_general',
      'produccion',
      'gerente_general',
      'gerente_proyecto',
      'control_costos',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
