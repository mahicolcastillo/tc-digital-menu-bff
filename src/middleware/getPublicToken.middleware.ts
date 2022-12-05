import { header } from 'express-validator';

const validation = [
    header('Content-Type').isString().notEmpty().withMessage('Parameter Content-Type is required'),
    header('SessionCode').isString().notEmpty().withMessage('Parameter SessionCode is required'),
    header('ApplicationName').isString().notEmpty().withMessage('Parameter ApplicationName is required'),
    header('ApplicationCode').isString().notEmpty().withMessage('Parameter ApplicationCode is required'),
    header('xTrackId').isString().notEmpty().withMessage('Parameter xTrackId is required'),
    header('Artifact').isString().notEmpty().withMessage('Parameter Artifact is required'),
    header('clientName').isString().notEmpty().withMessage('Parameter clientName is required'),
];

export default validation;