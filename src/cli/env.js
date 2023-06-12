const parseEnv = (prefix) => {
  Object.entries(process.env).forEach(([key, value]) => {
    if (!key.startsWith(prefix)) {
      return;
    }

    console.log(`${key}=${value};`);
  });
};

parseEnv("RSS_");
