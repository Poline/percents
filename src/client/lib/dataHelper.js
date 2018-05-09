export const getValidateData = (data) => {
    let validateData = [];

    data.map((element) => {
        validateData.push(getValidateObject(element));
    });
    
    return validateData;
};

const getValidateObject = (element) => {
    let sum = 0,
        validateObjectArray = [];

    element.map((item, index, array) => {
        let percent;

        if (sum < 100 && 100 - sum - item.percent >= 0) {
            if (array.length === index + 1){
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
};

export default dataHelper;