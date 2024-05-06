function statement(invoice, plays) {
    return renderPlainText(creatStatmentData(invoice, plays));
}

function creatStatmentData(invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(enrichPerformance);
    result.totalAmount = totalAmount(statementData);
    result.totalVolumeCredits = totalVolumeCredits(statementData);
    return result;
}

function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result)
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances) {
        // 청구 내역을 출력
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience})석\n`;
    }

    result += `총액: ${usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    return result
}

function totalAmount(invoice) {
    let result = 0;
    for (let perf of invoice.performances) {
        result += perf.amount;
    }

    return result
}

function totalVolumeCredits(invoice) {
    let result = 0;
    for (let perf of invoice.performances) {
        // 포인트 적립
        result += perf.volumeCredits;
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

    switch (aPerformance.play.type) {
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
            throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
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