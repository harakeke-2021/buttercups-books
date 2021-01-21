exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(() => {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1, title: 'Crescent City', author: 'Sarah J. Maas', pub_date: '3-3-2020', donor_id: 2 },
        { id: 2, title: 'The Invisible Life of Addie Larue', author: 'V. E. Schwab', pub_date: '6-10-2020', donor_id: 3 },
        { id: 3, title: 'The House in the Cerulean Sea', author: 'TJ Klune', pub_date: '17-3-2020', donor_id: 3 },
        { id: 4, title: 'Rhythm of War', author: 'Brandon Sanderson', pub_date: '17-11-2020', donor_id: 4 }
      ])
    })
}
