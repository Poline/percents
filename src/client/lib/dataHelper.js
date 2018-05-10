export const getValidateData = (data) => {
    let validateData = [];

    data.map((element) => {
        validateData.push(getValidateObject(element));
    });
    
    return validateData;
};

export const updatePercentValue = (data, {index, percentValue, currentIndex}) => {
    data[currentIndex][index].percent = percentValue;

    if (data[currentIndex].length !== 1){
        data[currentIndex] = getValidateObjectAfterUpdating(data[currentIndex], index);
    }

    return data;
}

export const getValidateObjectAfterUpdating = (data, index) => {
    let sum = 0,
        startIndex = index !== 0 ? 0 : 1,
        max = {id: startIndex, percent: data[startIndex].percent},
        min = {id: startIndex, percent: data[startIndex].percent};

    data.map((element, id) => {
        sum += element.percent;
        if (element.percent > max.percent && index !== id){
            max = {id: id, percent: element.percent};
        }
        if (element.percent < min.percent && index !== id){
            min = {id: id, percent: element.percent};
        }
    });

    if (sum < 100){
        data[min.id].percent = parseFloat((min.percent + (100 - sum)).toFixed(2));
    } else if (sum > 100){
        data[max.id].percent = parseFloat((max.percent - (sum - 100)).toFixed(2));
        if (data[max.id].percent < 0){
            data[max.id].percent = 0;
            data = getValidateObjectAfterUpdating(data, index);
        }
    }

    return data;
}

const getValidateObject = (element) => {
    let sum = 0,
        validateObjectArray = [];

    element.map((item, index, array) => {
        let percent;

        if (sum < 100 && 100 - sum - item.percent >= 0) {
            if (array.length === index + 1 && array.length > 1){
                percent = 100 - sum;
            } else{
                percent = item.percent;
            }
        } else {
            percent = 100 - sum;
        }

        sum += percent;

        validateObjectArray.push({
            percent: percent,
            name: item.name,
        });
    });

    return validateObjectArray;
}

const dataHelper = {
    getValidateData: getValidateData,
    updatePercentValue: updatePercentValue,
};

export default dataHelper;