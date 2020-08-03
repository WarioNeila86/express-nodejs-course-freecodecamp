module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        "no-unused-vars": ["error", { "argsIgnorePattern": "next|Sequelize" }]
    }
};
