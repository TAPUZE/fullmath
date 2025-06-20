module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    // Disable specific rules that are causing warnings
    "no-unused-vars": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "unicode-bom": "warn",
  }
};
