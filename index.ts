import alfy from 'alfy';

import { getDirs, translate } from './src';

(async () => {
  const { input = '' } = alfy;
  const cleanInput = input.trim();

  if (!cleanInput) {
    alfy.error('Empty input');
    return;
  }

  const dirs = await getDirs(cleanInput);
  if (!dirs) {
    return;
  }

  await translate(cleanInput, dirs);
})();
