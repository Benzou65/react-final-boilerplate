// eslint-disable-next-line import/no-anonymous-default-export
export default ({ styles, children, extractor }: any) => {
  return `<html lang="en" class="h-100">
  <head>
  <base href="/" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React BoilerPlate</title>
    ${styles}
    ${extractor.getStyleTags()}
  </head>
  <body class="h-100">
    <div id="root">${children}</div>
    ${extractor.getScriptTags()}
  </body>
</html>`;
};
