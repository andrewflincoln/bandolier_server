
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question_text: `How would you like a good review in Pitchfork?`, option_1: `It would be an honor!`, option_2: `Sure, why not?`, option_3: `No, I want them to hate me!`, option_4: `No, I'd just rather avoid it.`},
        {id: 2, question_text: `How good are you at your instrument?`, option_1: `I can barely play the thing.`, option_2: `Pretty good.`, option_3: `I shred.`, option_4: `I went to Julliard or some shit.`},
        {id: 3, question_text: `Would you participate in a huge reunion 20 years after your initially under-appreciated band's break up?`, option_1: `Yes! At last, they really love me!`, option_2: `Only if we're doing good new stuff.`, option_3: `Maybe if my solo thing isn't working out. I have a mortgage!`, option_4: `Nope. Sorry you missed it, losers.`},
        {id: 4, question_text: `Do you wish to rail against The Man?`, option_1: `Yes, endlessly.`, option_2: `Some.`, option_3: `The Man is bad, but not a musical priority.`, option_4: `The Man is good/I am The Man.`},
        {id: 5, question_text: `What's your ideal tour lifestyle? `, option_1: `Wild.`, option_2: `Wild, in moderation.`, option_3: `Not too wild.`, option_4: `Serene.`},
        {id: 6, question_text: `Who's the best?`, option_1: `Metallica`, option_2: `Megadeth`, option_3: `Slayer`, option_4: `None`},
        {id: 7, question_text: `Who's the best?`, option_1: `Yeah Yeah Yeahs`, option_2: `The Strokes`, option_3: `Interpol`, option_4: `None`},
        {id: 8, question_text: `Who's the best?`, option_1: `Nirvana`, option_2: `Pearl Jam`, option_3: `Soundgarden`, option_4: `None`},
        {id: 9, question_text: `If your band has a plural name, do you want "The..." to be part of the name?`, option_1: `Yes.`, option_2: `No.`, option_3: `Depends.`, option_4: `What?`},
        {id: 10, question_text: `Are substances part of your creative process?`, option_1: `Essential.`, option_2: `Sometimes.`, option_3: `Not really, but they're around.`, option_4: `They're not around.`},
        {id: 11, question_text: `Do you generally know who produced the albums you listen to?`, option_1: `Always.`, option_2: `For my favorites.`, option_3: `Maybe, if they're big producers.`, option_4: `No.`},
        {id: 12, question_text: `How much reverb?`, option_1: `Drenched.`, option_2: `Oh, like, this much.`, option_3: `Just a natural level.`, option_4: `Absolute zero.`},
        {id: 13, question_text: `Is Morrisey cool? `, option_1: `Yes.`, option_2: `No.`},
        {id: 14, question_text: `Nickelback...`, option_1: `Deserve everything they get.`, option_2: `Suck. But come on guys, this is silly.`, option_3: `Aren't that bad!`, option_4: `Are my favorite band.`},
        {id: 15, question_text: `Do figures like Kurt Cobain and Johnny Ramone belong on those "100 Greatest Guitarists Ever" lists? `, option_1: `Yes, they're influential and stuff.`, option_2: `No. Just not that good at guitar!`},
        {id: 16, question_text: `Who's the best?`, option_1: `Bob Dylan`, option_2: `Paul Simon`, option_3: `Neil Young`, option_4: `None`},

       
        
      ]).then(() => {
        return knex.raw(
          `SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));`
        )
      })
    });
};
