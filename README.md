## Installation
1. Install node.js

2. Install modules
```bash
npm install
```

3. Compile
```bash
npm run build
```

4. Run test
```bash
npm start
```

5.  Run Prettier
```bash
npx prettier --write src/**/*.*
```
In order not to apply Prettier, add `// prettier-ignore`
```javascript
// prettier-ignore
const jsx = `Long long long long long long long long long text with ${text.length} characters.`
```
