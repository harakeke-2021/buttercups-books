exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'ashby' },
        { id: 2, name: 'chris' },
        { id: 3, name: 'christo' },
        { id: 4, name: 'kenneth' }
      ])
    })
}
