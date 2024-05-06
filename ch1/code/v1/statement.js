function statement(invoice, plays) {
    let totalAmount = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;

    for (let perf of invoice.performances) {
        // 청구 내역을 출력
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience})석\n`;
        totalAmount += amountFor(perf);
    }

    result += `총액: ${usd(totalAmount)}\n`;
    result += `적립 포인트: ${totalVolumeCredits(invoice)}점\n`;
    return result;
}

function appleSource() {
    let result = 0;

    for (let perf of invoice.performances) {
        result += amountFor(perf);
    }

    return result

}

function totalVolumeCredits(invoice) {
    let result = 0;
    for (let perf of invoice.performances) {
        // 포인트 적립
        result += volumeCreditsFor(perf);
    }
    return result
}

// 4. 단위 usd로 변경
function usd(aNumber){
    return new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format(aNumber/100);
}


// 3. 포인트 추가 함수 추출
function volumeCreditsFor(perf) {
    let result = 0;
    result = Math.max(perf.audience - 30, 0);
        // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" == playFor(perf).type) 
        result += Math.floor(perf.audience / 5);
    return result;
}

//2. 공연 명 반환
function playFor(aPerformance) {
    return plays[aPerformance.playID];
}

/**
 * 1. 함수 추출 / 장르별 금액 계산하는 함수
 * @param {*} perf 
 * @param {*} aPerformance 
 * @returns thismount : int
 */
function amountFor(aPerformance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
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
            throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
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

const plays = {
    "hamlet" : {"name" : "Hamlet" , "type": "tragedy"},
    "as-like" : {"name": "As You Like It", "type" : "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

console.log(statement(invoiceDatas[0],plays))