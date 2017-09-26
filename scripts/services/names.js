app.service('userNames', [function () {
    this.get = function () {
        return selOpts;
    };
    this.find = function (search, maxFind) {
        maxFind = maxFind || 10;
        var result = [], search = search.toLowerCase();
        for (var i = 0; i < selOpts.length; i++) {
            var item = selOpts[i], lowName = item.nm.toLowerCase();
            if (lowName.indexOf(search) !== -1) {
                result.push({
                    name: item.nm,
                    email: lowName + '@test.com'
                });
            }
            if (result.length === maxFind) {
                break;
            }
        }
        return result;
    };
}]);
