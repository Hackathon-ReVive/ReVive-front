export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ["js", "jsx"]
  };
  
  
  