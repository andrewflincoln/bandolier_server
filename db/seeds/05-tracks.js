
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tracks').insert([
        {id: 1, user_id: 1, title: 'Turnstile Blues', artist_name: 'Autolux', user_contr: 'just drums on this one. good sample of my style i think', url: 'https://drive.google.com/file/d/1sTOhnIJLuaWmS8s1OufcgizLrG4rlJRN/view?usp=sharing'},

      ]);
    });
};
