import chalk from 'chalk';

export default <T>(a: T): void => {
  console.log(chalk.black.bgWhite(JSON.stringify(a)));
};
