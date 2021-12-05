module.exports = {
  prefix: 'tw-',
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}",
    ]
  },
  darkMode: false, // or 'media' or 'class'
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
