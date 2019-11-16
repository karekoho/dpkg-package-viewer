import { Package} from './package';

/**
 * If index given and index key exists, return instance form index.
 * Otherwise return new inctance.
 */
class SharedPackage extends Package {
    /**
     * 
     * @param {String} name 
     * @param {String} info
     * @param {Map} index
     */
    constructor(name, info, index) {
        super(name, info);

        // if (index && index.has(name)) { return index.get(name); }

        // TODO: set and return new instance
    }

    /* TODO: ??? static instance (name, info, index) { return new SharedPackage (name, info, index); } */
}

export { SharedPackage };