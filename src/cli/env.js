const parseEnv = (prefix) => {
  const env = Object.entries(process.env)
    .map(([key, value]) => {
      if (!key.startsWith(prefix)) {
        return;
      }

      return `${key}=${value};`;
    })
    .filter(Boolean);

  console.log(...env);
};

parseEnv("RSS_");
