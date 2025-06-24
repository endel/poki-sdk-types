# PokiSDK: TypeScript Types

This project aims to provide the PokiSDK types as a NPM module. Check out the [PokiSDK documentation](https://sdk.poki.com/html5.html).

Pull-requests are welcome!

## Installation instructions

Install the module as a development dependency:

```
npm install --save-dev poki-sdk-types
```

### `tsconfig.json`

1. Open your project's `tsconfig.json` file.
2. Locate or add the `compilerOptions` object.
3. Add a `types` array (if not already present) and add `poki-sdk-types` to the list.

**Example**:

```json
{
  "compilerOptions": {
    "types": ["poki-sdk-types"],
    // Other compiler options...
  }
}
```

## License

MIT
