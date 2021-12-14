module.exports = {
  prefix: 'tw-',
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}",
    ]
  },
  content: {
    enabled: true,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}",
    ]
  },
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
