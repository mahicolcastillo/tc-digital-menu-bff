import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getCategoriesService from './getCategories.service';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getCategoriesModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getCategories`);
        const response = await getCategoriesService(headers);
        
        return new OutputMessage(response).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getCategoriesModule;