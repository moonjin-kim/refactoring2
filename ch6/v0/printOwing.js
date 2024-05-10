function printOwing(invoice) {
    //1. banner 출력 함수 추출
    printBanner();

    //2. 채무 계산 함수 추출
    let outstanding = calOutstanding(invoice)

    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    printDetail(invoice, outstanding);
}

//미해결 채무(outstanding) 계산
function calOutstanding(invoice) {
    result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result
}

function printBanner() {
    console.log('****************');
    console.log('*****고객 채무*****');
    console.log('****************');
}

function printDetail(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
