function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement){
        return arrayElement.url.match(searchTerm);
    });
}

module.exports = filterByTerm;
