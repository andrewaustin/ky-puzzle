# Is there a way to get ts-node, ky, & commonjs to play nicely together?

```text
/Users/andrew/code/ky-puzzle/node_modules/ts-node/dist/index.js:851
            return old(m, filename);
                   ^
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/andrew/code/ky-puzzle/node_modules/ky/distribution/index.js from /Users/andrew/code/ky-puzzle/index.ts not supported.
Instead change the require of index.js in /Users/andrew/code/ky-puzzle/index.ts to a dynamic import() which is available in all CommonJS modules.
    at require.extensions.<computed> [as .js] (/Users/andrew/code/ky-puzzle/node_modules/ts-node/dist/index.js:851:20)
    at Object.<anonymous> (/Users/andrew/code/ky-puzzle/index.ts:6:30)
    at m._compile (/Users/andrew/code/ky-puzzle/node_modules/ts-node/dist/index.js:857:29) {
  code: 'ERR_REQUIRE_ESM'
}
```

```text
The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("ky")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/Users/andrew/code/ky-puzzle/package.json'.ts(1479)
module "/Users/andrew/code/ky-puzzle/node_modules/ky/distribution/index"
```

## Repro

1. nvm use
2. npm install
3. npm start

Is the only way to switch to esm completely (which ts-node has its own problems with)?
