export function convertItemToAttributeValue(value) {
    let resultAttribuValue = new AWSDynamoDBAttributeValue();
    if (value.type === "L") {
        let objList = NSMutableArray.alloc().initWithCapacity(value.data.length);
        for (let _i = 0, _a = value.data; _i < _a.length; _i++) {
            let tmp = _a[_i];
            let attributeValue = this.convertItemToAttributeValue(tmp);
            objList.addObject(attributeValue);
        }
        resultAttribuValue.L = NSArray.arrayWithArray(objList);
    }
    else if (value.type === "S") {
        resultAttribuValue.S = value.data;
    }
    else if (value.type === "N") {
        resultAttribuValue.N = value.data;
    }
    else if (value.type === "B") {
        resultAttribuValue.B = value.data;
    }
    else if (value.type === "SS" || value.type === "NS") {
        let objList = NSMutableArray.alloc().initWithCapacity(value.data.length);
        for (let _b = 0, _c = value.data; _b < _c.length; _b++) {
            let tmp = _c[_b];
            objList.addObject(tmp);
        }
        if (value.type === "SS") {
            resultAttribuValue.SS = NSArray.arrayWithArray(objList);
        }
        else {
            resultAttribuValue.NS = NSArray.arrayWithArray(objList);
        }
    }
    else if (value.type === "BO") {
        resultAttribuValue.BOOLEAN = new NSNumber(value.data);
    }
    return resultAttribuValue;
}

export function convertItem(result): any {
    let attributeValue;
    if (!result.item) {
        return null;
    }
    let res = new Object();
    let data;
    for (let i = 0; i < result.item.allKeys.count; i++) {
        let tmp = result.item.allKeys.objectAtIndex(i);
        attributeValue = result.item.objectForKey(tmp);
        data = convertAttributeValue(attributeValue);
        res[tmp] = data;
    }
    return res;
}

export function convertRawItem(result): any {
    let attributeValue;
    if (!result) {
        return null;
    }
    let res = new Object();
    let data;
    for (let i = 0; i < result.allKeys.count; i++) {
        let tmp = result.allKeys.objectAtIndex(i);
        attributeValue = result.objectForKey(tmp);
        data = convertAttributeValue(attributeValue);
        res[tmp] = data;
    }
    return res;
}

export function convertAttributeValue(attributeValue) {
    let data;
    if (attributeValue.S != null)
        data = attributeValue.S;
    else if (attributeValue.N != null)
        data = attributeValue.N;
    else if (attributeValue.B != null)
        data = attributeValue.B;
    else if (attributeValue.M != null) {
        let allKeys = attributeValue.M.allKeys;
        let allValues = attributeValue.M.allValues;
        let res = new Object();

        for (let i = 0; i < allKeys.count; i++) {
            res[allKeys[i]] = convertAttributeValue(allValues[i]);
        }
        data = res;
    }
    else if (attributeValue.L != null) {
        let r = new Array();
        let list = attributeValue.L;
        for (let i = 0; i < list.count; i++) {
            r.push(this.convertAttributeValue(list.objectAtIndex(i)));
        }
        data = r;
    }
    else if (attributeValue.BS != null || attributeValue.NS != null || attributeValue.SS != null) {
        let r = new Array();
        let list = attributeValue.BS;
        if (list == null)
            list = attributeValue.NS;
        if (list == null)
            list = attributeValue.SS;
        for (let i = 0; i < list.count; i++) {
            r.push(list.objectAtIndex(i));
        }
        data = r;
    }
    else if (attributeValue.NIL != null)
        data = attributeValue.NIL;
    else if (attributeValue.BOOLEAN != null)
        data = attributeValue.BOOLEAN;
    return data;
}