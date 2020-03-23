module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length;) {
        let includesPair = str.includes(bracketsConfig[i].join(''));
        if (!includesPair) {
            i++;
            continue;
        }
        str = str.replace(bracketsConfig[i].join(''), '');
        i = 0;
    }
    return str.length === 0;
};
