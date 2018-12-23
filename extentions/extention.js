/* A convenience method for storing an object or array in localStorage or sessionStorage */
Storage.prototype.setObject = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};
/* A convenience method for accessing an object or array in localStorage or sessionStorage */
Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
};