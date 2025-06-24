# PokiSDK: TypeScript Types

This project provides the PokiSDK types as a NPM module. Check out the [PokiSDK documentation](https://sdk.poki.com/html5.html).

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

## Mocking the PokiSDK

You may want to mock the PokiSDK in case it's not available. Here's an example how to do it:

```typescript
//
// Mock PokiSDK if it's not available.
//
if (typeof(PokiSDK) === 'undefined') {
  console.log('PokiSDK not found, creating a mock');
  ((globalThis as any).PokiSDK as PokiSDK) = {
    setDebug: (_: boolean) => {},
    init: () => Promise.resolve(),
    gameLoadingFinished: () => {},
    gameplayStart: () => { },
    gameplayStop: () => { },
    commercialBreak: (_?: () => any) => Promise.resolve(),
    rewardedBreak: (_?: () => any) => Promise.resolve(),
    getURLParam: (paramName: string) => new URLSearchParams(window.location.search).get(paramName) || undefined,
    getLanguage: () => window.document.documentElement.lang,
    playtestSetCanvas: (canvas: HTMLCanvasElement) => {}
  };
}

if (!window.location.href.includes("poki")) {
  PokiSDK.shareableURL = (params: Record<string, any>) => {
    const urlParams = new URLSearchParams(params);
    return Promise.resolve(
      window.location.protocol
      + "//"
      + window.location.hostname
      + ((window.location.port && `:${window.location.port}`) || "")
      + "/#/?" + urlParams.toString()
    );
  }
}

const init = PokiSDK.init();
init.then(() => PokiSDK.setDebug(true));
```

## License

MIT
