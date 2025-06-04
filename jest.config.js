module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": [
      "babel-jest",
      {
        presets: ["@babel/preset-env"],
        plugins: ["babel-plugin-transform-vite-meta-env"],
      },
    ],
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
