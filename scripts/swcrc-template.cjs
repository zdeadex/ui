module.exports = {
  $schema: 'https://json.schemastore.org/swcrc',
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
      dts: true,
      decorators: false,
      dynamicImport: false,
    },
    transform: {
      react: {
        runtime: 'automatic',
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        throwIfNamespace: true,
        development: false,
        useBuiltins: false,
      },
    },
    baseUrl: '.',
    target: 'es2019',
    loose: false,
    keepClassNames: true,
  },
  sourceMaps: true,
  minify: false,
}
