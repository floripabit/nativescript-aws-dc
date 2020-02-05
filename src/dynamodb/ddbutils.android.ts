    export function convertItemToAttributeValue(value) {
        let resultAttribuValue = new com.amazonaws.services.dynamodbv2.model.AttributeValue();
        if (value.type === "L") {
            let a = new java.util.ArrayList();
            for (let tmp of value.data) {
                let attributeValue = convertItemToAttributeValue(tmp);
                a.add(attributeValue);
            }
            resultAttribuValue.setL(a);
        } else if (value.type === "S") {
            resultAttribuValue.setS(value.data);
        } else if (value.type === "N") {
            resultAttribuValue.setN(value.data);
        } else if (value.type === "B") {
            resultAttribuValue.setB(value.data);
        } else if (value.type === "SS" || value.type === "NS") {
            let a = new java.util.ArrayList();
            for (let tmp of value.data) {
                a.add(tmp);
            }
            if (value.type === "SS") {
                resultAttribuValue.setSS(a);
            } else {
                resultAttribuValue.setNS(a);
            }
        } else if (value.type === "BO") {
            resultAttribuValue.setBOOL(new java.lang.Boolean(value.data));
        }
        return resultAttribuValue;
    }

    export function convertAttributeValue(attributeValue) {
        let data: any;
        if (attributeValue.getS() != null) {
            data = attributeValue.getS();
        } else if (attributeValue.getN() != null) {
            data = attributeValue.getN();
        } else if (attributeValue.getB() != null) {
            data = attributeValue.getB();
        } else if (attributeValue.getM() != null) {
            let values = attributeValue.getM();
            let iterator = values.keySet().iterator();
            let res = new Object();
            let data1, attribute1;

            while (iterator.hasNext()) {
                let tmp = iterator.next();
                attribute1 = values.get(tmp);
                data1 = convertAttributeValue(attribute1);
                res[tmp] = data1;
            }
            data = res;
        }
        else if (attributeValue.getL() != null) {
            let r = new Array();
            let list = attributeValue.getL();
            let it = list.iterator();
            while (it.hasNext()) {
                let d = it.next();
                r.push(convertAttributeValue(d));
            }
            data = r;
        } else if ( attributeValue.getBS() != null ||
                    attributeValue.getNS() != null ||
                    attributeValue.getSS() != null) {
            let r = new Array();
            let list = attributeValue.getBS();
            if (list == null) list = attributeValue.getNS();
            if (list == null) list = attributeValue.getSS();
            let it = list.iterator();
            while (it.hasNext()) {
                let d = it.next();
                r.push(d);
            }
            data = r;
        } else if (attributeValue.getNULL() != null) {
            data = attributeValue.getNULL();
        }
        else if (attributeValue.getBOOL() != null) {
            data = attributeValue.getBOOL();
        }
        return data;
    }

    export function convertItem(result) {
        let item = result.getItem();
        if (!item) {
            return null;
        }
        return convertMapItem(item);
    }

    export function convertMapItem(result: java.util.Map<string, com.amazonaws.services.dynamodbv2.model.AttributeValue>) {
        let attributeValue: com.amazonaws.services.dynamodbv2.model.AttributeValue;
        if (!result) {
            return null;
        }
        let iterator = result.keySet().iterator();
        let res = new Object();
        let data;
        while (iterator.hasNext()) {
            let tmp = iterator.next();
            attributeValue = result.get(tmp);
            data = convertAttributeValue(attributeValue);
            res[tmp] = data;
        }
        return res;
    }