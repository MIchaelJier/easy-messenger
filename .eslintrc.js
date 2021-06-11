
module.exports ={
  "root": true, 
  "env": {
      "browser": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { 
      "ecmaVersion": 12,  
      "sourceType": "module"
  },  
  "plugins": ["@typescript-eslint", "prettier"], 
  "rules": { 
      "prettier/prettier": 2,
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"], 
      "max-len": ["error", 160], 
  },
  "ignorePatterns": ["coverage"]
}