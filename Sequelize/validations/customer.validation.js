const Joi = require('joi');

exports.create = (req, res, next) => {
  const Scheme = Joi.object({
              title: Joi.string().optional(),
              value: Joi.string().optional()
	      })
  validateRequest(req, res, next, Scheme)
};

exports.update = (req, res, next) => {
  const Scheme = Joi.object({
              title: Joi.string().optional(),
              value: Joi.string().optional()
	      }).append({
    id: Joi.string().required()  // Add 'id' as a required field directly
  })

  validateRequest(req, res, next, Scheme)
};

exports.show = (req, res, next) => {
  // Define a schema for the id parameter
  const schema = Joi.object({
      id: Joi.string().required() // Assuming the id is a string, adjust if needed (e.g., UUID or numeric)
  });

  // Call the validateRequest function to validate the id parameter
  validateRequest(req, res, next, null, schema);
};

exports.delete = (req, res, next) => {
  // Define a schema for the id parameter
  const schema = Joi.object({
      id: Joi.string().required() // Assuming the id is a string, adjust if needed (e.g., UUID or numeric)
  });

  // Call the validateRequest function to validate the id parameter
  validateRequest(req, res, next, schema);
};

// Unified validateRequest function
function validateRequest(req, res, next, bodySchema = null, paramsSchema = null) {
    // Validate the params (id) if paramsSchema is provided
    if (paramsSchema) {
      const { error: paramsError } = paramsSchema.validate(req.params);
      if (paramsError) {
          return res.status(400).json({ message: paramsError.details[0].message });
      }
    }

    // Validate the request body if bodySchema is provided
    if (bodySchema) {
      const { error: bodyError } = bodySchema.validate(req.body);
      if (bodyError) {
          return res.status(400).json({ message: bodyError.details[0].message });
      }
    }

    // If no errors, proceed to the next middleware
    next();
}
        