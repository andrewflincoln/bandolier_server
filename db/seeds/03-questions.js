
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question_text: `How would you like a good review in Pitchfork?`, option_1: `It would be an honor!`, option_2: `Sure, why not?`, option_3: `No, I want them to hate me!`, option_4: `No, I'd just rather avoid it.`},
        {id: 2, question_text: `How good are you at your instrument?`, option_1: `I can barely play the thing.`, option_2: `Pretty good.`, option_3: `I shred.`, option_4: `I went to Julliard or some shit.`},
        {id: 3, question_text: `Would you participate in a huge reunion 20 years after your initially under-appreciated band's break up?`, option_1: `Yes! At last, they really love me!`, option_2: `Only if we're doing good new stuff.`, option_3: `Maybe if my solo thing isn't working out. I have a mortgage!`, option_4: `No fuckin way. Sorry you missed it, losers.`},
      ]).then(() => {
        return knex.raw(
          `SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));`
        )
      })
    });
};


