const parseArgs = () => {
  const args = process.argv.slice(2);
  args.forEach((arg, index) => {
    const key = arg;
    const value = args[index + 1];

    if (!arg.startsWith("--") || !value) {
      return;
    }

    console.log(`${key} is ${value}`);
  });
};

parseArgs();
