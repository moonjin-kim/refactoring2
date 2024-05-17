function discount(aData, plan) {
    if(summer())
        charge = summerCharge();
    else
        charge = regularCharge();
}

function summer() {
    return !aDate.isBefor(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quanity * plan.summerRate;
}

function regularCharge() {
    return quanity * plan.reqularRate + plan.reqularServiceCharge;
}
