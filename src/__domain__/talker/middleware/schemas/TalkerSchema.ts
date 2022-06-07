import Joi from 'joi';

export const TalkerScheme = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.min': 'O "name" deve ter pelo menos 3 caracteres',
    'any.required': 'O campo "name" é obrigatório',
  }),
  age: Joi.number().min(18).required().messages({
    'number.min': 'A pessoa palestrante deve ser maior de idade',
    'any.required': 'O campo "age" é obrigatório',
  }),
  talk: Joi.object({
    watchedAt: Joi.date().required().messages({
      'date.base': 'O campo "watchedAt" é obrigatório',
    }),
    rate: Joi.number().min(1).max(5).required().messages({
      'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
      'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
    }),
  })
    .required()
    .messages({
      'any.required':
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    }),
});
