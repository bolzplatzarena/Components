module.exports = {
  prefix: 'tm-',
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
  ],
  important: true,
  corePlugins: {
    preflight: false,
  }
}
