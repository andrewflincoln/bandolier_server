
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tracks').insert([
        {id: 1, user_id: 1, title: 'Brainwasher', artist_name: 'Autolux', user_contr: 'drums and vocals on this one. good sample of my styles on both i think', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/autolux_brainwasher.mp3`},
        {id: 2, user_id: 2, title: 'Death Letter', artist_name: 'The White Stripes', user_contr: `it's a cover of some blues guy to whom we all owe all we have, really`, url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/white_stripes_deathletter.mp3`},
        {id: 3, user_id: 3, title: 'All The Time', artist_name: 'Vivian Girls', user_contr: 'I just made made this and then everyone liked it a lot I guess', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/vivian_girls_allthetime.mp3`},
        {id: 4, user_id: 4, title: 'Hurricane', artist_name: 'Kyuss', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/kyuss_hurricane.mp3`},
        {id: 5, user_id: 5, title: `Can't Stop It`, artist_name: 'Bad Religion', user_contr: 'I singlehandedly breathed new life into the band on this album. Can I do the same for you? ', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/bad_religion_cantstopit.mp3`},
        {id: 6, user_id: 6, title: 'Faith', artist_name: 'Ghost', user_contr: 'Ah yes, Faith. It is what you must have in me, your leader.', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/ghost_faith.mp3`},
        {id: 7, user_id: 7, title: 'Imagination Blind', artist_name: 'Dinosaur Jr.', user_contr: `J lets me write 2 songs per album. Gotta make em count!`, url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/dinosaurjr_imaginationblind.mp3`},
        // {id: 8, user_id: 8}, //leaving Gary's empty for test purposes
        {id: 9, user_id: 9, title: 'On The Sly', artist_name: 'Metric', user_contr: 'see, needs something right? Think this will become my mysterious lost album', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/metric_onthesly.mp3`},
        {id: 10, user_id: 10, title: 'Evil', artist_name: 'Savages', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/savages_evil.mp3`},
        {id: 11, user_id: 11, title: 'Oblivion', artist_name: 'Brant Bjork', user_contr: 'finally, my very own band! rocks pretty good, right? ', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/brant_bjork_oblivion.mp3`},
        {id: 12, user_id: 12, title: 'Porphyria Cutanea Tarda', artist_name: 'AFI', user_contr: 'man, we used to be so good!', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/afi_porphyria.mp3`},
        {id: 13, user_id: 13, title: 'My Poor Brain', artist_name: 'Foo Fighters', user_contr: 'Can you believe that maniac did this over? it was totally adequte!', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/foo_fighters_mypoorbrain.mp3`},
        {id: 14, user_id: 14, title: 'Precipitate', artist_name: 'Interpol', user_contr: `Little band I was playing with, don't think it's gonna pan out`, url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/interpol_precipitate.mp3`},
        {id: 15, user_id: 15, title: 'The Day Is My Enemy', artist_name: 'The Prodigy', user_contr: 'sounds like a marchng band but it was just one guy playing a drum over and over again for a week! that could be you.', url: `https://s3-us-west-2.amazonaws.com/bandolier-tracks/prodigy_thedayismyenemy.mp3`},

      ]);
    });
};
      
