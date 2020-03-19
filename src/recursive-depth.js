module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        arr.forEach(el => {
            if(Array.isArray(el)){
                depth++;
                return this.calculateDepth(el, depth);
            }
        })
        return depth;
    }
};