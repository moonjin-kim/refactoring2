function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format;

    for (let perf of invoice.performances) {
        let thisAmount = amountFor(perf, playFor(perf.playID)); // 1. 함수 추출 

        // 포인트 적립
        volumeCredits += Math.max(perf.audience - 30, 0);
        // 희극 관객 5명마다 추가 포인트를 제공한다.
        if ("comedy" == play.type) volumeCredits += Math.floor(perf.audience / 5);

        result += ` ${play.name}: ${format(thisAmount/100)} (${perf.audience})석\n`;
        totalAmount += thisAmount;
    }

    //청구 내역을 출력한다
    result += `총액: ${format(totalAmount / 100)}\n`;
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;
}

//2. 공연 명 반환
function playFor(playId) {
    return plays[playId];
}

/**
 * 1. 함수 추출 / 장르별 금액 계산하는 함수
 * @param {*} perf 
 * @param {*} aPerformance 
 * @returns thismount : int
 */
function amountFor(aPerformance, play) {
    let result = 0;

    switch (play.type) {
        case "tragedy": //비극
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 10000 + 500 * (aPerformance.audience - 30);
            }
            break;
        case "comedy": //희극
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${play.type}`);
    }

    return result;
}

const invoiceDatas = [
    {
        "customer" : "BigCo",
        "performances": [
            {
                "playID" : "hamlet",
                "audience": 55
            },
            {
                "playID" : "as-like",
                "audience": 35
            },
            {
                "playID" : "othello",
                "audience": 40
            }
        ]
    }
]

const playData = {
    "hamlet" : {"name" : "Hamlet" , "type": "tragedy"},
    "as-like" : {"name": "As You Like It", "type" : "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

console.log(statement(invoiceDatas[0],playData))