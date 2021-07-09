//const { query } = require("express");

function DataValidator(check = "body", schema) {
  return (req, res, next) => {
    var data = req[check];
    const { error, value } = schema.validate(data);
    if (error!=undefined) {
      res.status(406).json({
        msg: error.details[0].message
      });
    } else {
      req[check] = value;
      next();
    }
  };
}
module.exports.DataValidator = DataValidator;
