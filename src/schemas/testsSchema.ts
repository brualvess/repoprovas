import joi from 'joi'
export const schemaTests = joi.object({
    userId: joi.number(),
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    categoryId: joi.number().required(),
    teacherDisciplineId: joi.number().required()
});
