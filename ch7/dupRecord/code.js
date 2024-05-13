import {data} from "./data.js";
import {CustomerData} from "./CustomerData.js";

let customerData;

function getCustomerData() {return customerData;}
function getRawDataOfCustomers() {return customerData._data;}
function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg);}


function compareUsage(customId, laterYear, month) {
    const later = getCustomerData().usage(customId,laterYear,month);
    const earlier = getCustomerData().usage(customId,laterYear-1,month);

    return {laterAmount: later, change: later - earlier};
}
