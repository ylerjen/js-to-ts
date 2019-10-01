
declare global {
    interface Window {
        App: any;
        setNamespace: Function;
    }
}

import './helpers/namespace';
import './models/animal';
import './models/person';
import './main';