// import chalk from "chalk";
import { exec } from "child_process";
import detectPort from "detect-port";

const port = process.env.PORT || "1212";

detectPort(port, (err, availablePort) => {
  if (port !== String(availablePort)) {
    console.log(`Port "${port}" is already in use. Killing it...`);
    exec("npm run kill", (error, stdout) => {
      if (err) throw new Error(error);
      if (stdout) console.log(stdout);
      process.exit(0);
    });

    /* throw new Error(
      chalk.whiteBright.bgRed.bold(
        `Port "${port}" on "localhost" is already in use. Please use another port. ex: PORT=4343 npm start`
      )
    ); */
  } else {
    process.exit(0);
  }
});
