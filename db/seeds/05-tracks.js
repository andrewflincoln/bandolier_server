
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tracks').insert([
        {id: 1, user_id: 1, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/turnstile_blues.mp3`},
        {id: 2, user_id: 2, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`},
        {id: 3, user_id: 3, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/vivian_girls_allthetime.mp3`},
        {id: 4, user_id: 4, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/turnstile_blues.mp3`},
        {id: 5, user_id: 5, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`},
        {id: 6, user_id: 6, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/vivian_girls_allthetime.mp3`},
        {id: 7, user_id: 7, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/turnstile_blues.mp3`},
        {id: 8, user_id: 8, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`},
        {id: 9, user_id: 9, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/vivian_girls_allthetime.mp3`},
        {id: 10, user_id: 10, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/turnstile_blues.mp3`},
        {id: 11, user_id: 11, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`},
        {id: 12, user_id: 12, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/vivian_girls_allthetime.mp3`},
        {id: 13, user_id: 13, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/turnstile_blues.mp3`},
        {id: 14, user_id: 14, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`},

      ]);
    });
};
      
