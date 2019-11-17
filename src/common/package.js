/**
 * Display dpkg package info
 */
class Package {
    /**
     * 
     * @param {String} name 
     * @param {String} info 
     */
    constructor (name, info) {
        this._name = name;
        this._info = {};    // TODO: parse info to object
    }
    /**
     * 
     * @readonly
     * @memberof Package
     * @returns Package name
     */
    get name () { return this._name; }
    /**
     * 
     * @readonly
     * @memberof Package
     * @returns Package information
     */
    get info () { return this._info; }
}

export { Package };