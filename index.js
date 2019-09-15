const alfy = require('alfy');

const { getDirs, translate } = require('./helpers');

(async () => {
  const { input = '' } = alfy;
  const cleanInput = input.trim();

  if (!cleanInput) {
    alfy.error('Empty input');
    return;
  }

  const dirs = await getDirs(cleanInput);
  await translate(cleanInput, dirs);
})();
