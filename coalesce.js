/**
 * @callback asnyCallback
 * @param {*} element
 */


/**
 * Executes the async function provided by callback
 * until it resolves with the values in elements
 * @param {Array} elements 
 * @param {asyncCallback} callback 
 * @return {*} return value of the callback
 */
function coalesce(elements, callback) {
    let element = elements.splice(0, 1)[0]
    return callback(element).catch(error => {
        if (elements.length) {
            return coalesce(elements, callback)
        } else {
            return error
        }
    })
}


module.exports = coalesce;