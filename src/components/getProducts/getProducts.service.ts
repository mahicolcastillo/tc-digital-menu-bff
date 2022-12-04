import axios                    from 'axios';
import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import config   from '../../config/global';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getProducts`);

        if(!headers.clientname) throw 'clientName not defined';

        const response = await axios.get(config.apis.API_PRODUCTS + 'getProducts', { headers });
        logger.debug(`Response data products: ${JSON.stringify(response.data.payload)}`);

        return response.data.payload;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getProductsService;