/*
const Joi = require("joi");
const { formModel } = require("../../models/form.model");
const mongoose = require("mongoose");
let inputs = {};
let schemaPrimary = {
  fullName: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(
    new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
    )
  ),

  repeat_password: Joi.ref("password"),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    })
    .required(),
  role: Joi.string().alphanum().min(4).max(30).required(),
  birthDate: Joi.date(),
};

mongoose.connection.on("open", async () => {
  inputs = await formModel.find();
  const readyInputs = inputs.map((input) => {
    return input.name;
  });
  readyInputs.forEach((input) => {
    schemaPrimary = { ...schemaPrimary, [input]: Joi.any() };
  });
});
module.exports.signupValidation = {
  schema: Joi.object({
    ...schemaPrimary,
  })
    ?.with("password", "repeat_password")
    ?.allow("additionalProperties"),
};
*/
const Joi = require("joi");

const schema = Joi.object({
  fullName: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(
    new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
    )
  ),

  repeat_password: Joi.ref("password"),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    })
    .required(),
  role: Joi.string().alphanum().min(4).max(30).required(),
  birthDate: Joi.date(),
  news: Joi.boolean(),
  gender: Joi.string().required(),
  username: Joi.string().required(),
  profilePic: Joi.string(),
  additional: Joi.any(),
  additional2: Joi.any(),
  additional3: Joi.any(),
  additional4: Joi.any(),
  additional5: Joi.any(),
  additional6: Joi.any(),
  additional7: Joi.any(),
  additional8: Joi.any(),
  additional9: Joi.any(),
})
  .with("password", "repeat_password")
  .allow("additionalProperties");
module.exports.signupValidation = { schema };
