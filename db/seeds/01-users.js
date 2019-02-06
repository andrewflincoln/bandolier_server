
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Carla', email: 'carla@autolux.com', hashed_password: 'pw', deal: `I like to play real drums like they're electronic`, genre_1: 'Alt', genre_2: 'Experimental', bio: `In a cool band and have sweet touring gig. On hiatus right now so seeing what's out there. I have a screw in my arm!`, heroes: 'Keith Moon', influences: 'PJ Harvey, Aphex Twin, Chemical Brothers', instr_1: 'Drums', instr_2: 'Vocals', looking_1: 'Guitar', looking_2: 'Synths', looking_3: 'Bass', digs_user_ids: 3},
        {id: 2, username: 'Jack', email: 'jack@white.com', hashed_password: 'pw', deal: `Just looking for a bad-yet-compelling drummer who is my ex-wife`, genre_1: 'Alt', genre_2: 'Blues-rock', bio: `I use to do upholstery or something for a living but now have a pretty good little thing going. My band before had an ex-wife drummer like I mentioned so looking to recapture that with a new one.`, heroes: 'Robert Plant', influences: 'Robert Johnson, The Sonics, all of the blues', instr_1: 'Guitar', instr_2: 'Vocals', instr_3: 'Drums', looking_1: 'Drums', digs_user_ids: 1},
        {id: 3, username: 'Cassie', email: 'cassie@viviangirls.com', hashed_password: 'pw', deal: `Just your typical lo-fi-post-punk-dream-noise-garage-pop singer/songwriter in Brooklyn`, genre_1: 'Punk', genre_2: 'Noise-pop', bio: `I was in a legendary band that changed all of music forever that you probably haven't heard of a while back`, heroes: 'Greg Sage', influences: 'The Wipers, Nirvana, Ramones', instr_1: 'Guitar', instr_2: 'Vocals', looking_1: 'Bass', looking_2: 'Drums', digs_user_ids: 1},
        {id: 4, username: 'Nick', email: 'nick@nick.com', hashed_password: 'pw', deal: 'I can change I swear!', genre_1: 'Stoner Rock', genre_2:'Punk', genre_3: 'Metal', bio: `I keep getting kicked out of bands due to substance abuse issues, standoffs w/SWAT teams, etc. But all of that ends right now!`, heroes: 'Lemmy', influences: 'The Dwarves, Black Flag, Sabbath', instr_1: 'Bass', instr_2: 'Vocals', looking_1: 'All', digs_user_ids: 1},
        {id: 5, username: 'Brooks', email: 'brooks@avenged.com', hashed_password: 'pw', deal: `Well...I am literally the greatest drummer in the world. Sweet right?`, genre_1: 'Punk', genre_2: 'Metal', genre_3: 'Jazz', bio: `Left that guy Andrew's favorite band to join some dumb metal band. Huge mistake, not working out. Looking to get back into punk.`, heroes: 'Josh Freese, Pete Finestone', influences: 'Pennywise, The Descendants, Suicidal Tendencies', instr_1: 'Drums', instr_2: 'Guitar', looking_1: 'All', digs_user_ids: 1},

      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
};
