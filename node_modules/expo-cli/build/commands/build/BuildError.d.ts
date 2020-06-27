import ExtendableError from 'es6-error';
export default class BuildError extends ExtendableError {
    message: string;
    name: string;
    constructor(message: string);
}
