module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [

    // Enables @Component written "before" exports default
    ["@babel/plugin-proposal-decorators", { legacy: true }],

    // Enables @Prop
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}