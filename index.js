const dud = require('@happybits/dud')

dud.run(

    { path: 'sample/' },

    ['maxage'],
    ['maybeAddStars', 'oneline'],
    ['pickEverySecondElement']
);

