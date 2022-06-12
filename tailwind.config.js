module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  }
}
