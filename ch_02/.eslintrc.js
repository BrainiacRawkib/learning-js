module.exports = {
    "env": {
        "browser": true,
        // "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        /* changed comma-dangle default...ironically,
        we can't use a dangling comma here because this
        is a JSON file*/
        "comma-dangle": [
            2, "always-multiline"
        ],
        "indent": [
            2, 4
        ],
    }
}
