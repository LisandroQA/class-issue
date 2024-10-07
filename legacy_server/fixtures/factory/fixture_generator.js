const BaseClass = require("./_class.js");

/* ====================================================== */
/*                      Public API                        */
/* ====================================================== */

const FixtureGenerator = BaseClass.extend({
  init(schema, options) {
    this.schemaFaker = _generateSchemaFaker(schema, options);
    this.schema = schema;
    this.schemaName = schema._schemaName;
  },
});

module.exports = FixtureGenerator;
