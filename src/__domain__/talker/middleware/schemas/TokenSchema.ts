import Joi from 'joi';

export const TokenSchema = Joi.object({
  token: Joi.string().length(16).required().messages({
    'string.length': 'Token não encontrado',
    'any.required': 'Token inválido',
  }),
});
