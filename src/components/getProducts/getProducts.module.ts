import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getProductsService   from './getProducts.service';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getProducts`);
        const response = await getProductsService(headers);

        const responseFormat = {
            products    : response.products,
            combos      : response.combos,
        }
        
        return new OutputMessage(responseFormat).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getProductsModule;