const plugin = require("tailwindcss/plugin");

const disableVariant = plugin(function ({ addVariant }) {
  addVariant("group-disable", ":merge(.group).disable &");
});

module.exports = disableVariant;
