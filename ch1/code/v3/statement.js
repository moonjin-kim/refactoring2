import { creatStatmentData} from './createStatementData.js'

function statement(invoice, plays) {
    return renderPlainText(creatStatmentData(invoice, plays));
}

function htmlStatement(invoice, plays) {
    return renderHtml(creatStatmentData(invoice, plays));
}

function renderHtml(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`
    result += `<table>\n`;
    result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>";
    for (let perf of data.performances) {
        console.log(perf.play.name);
        result += ` <tr><td>${perf.play.name}</td><td>(${perf.auience}석)</td>`
        result += `<td>${usd(perf.amount)}</td></tr>`
    }
    result += "</table>/n";
    result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
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

// 4. 단위 usd로 변경
function usd(aNumber){
    return new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format(aNumber/100);
}

const invoiceDatas1 = [
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

const plays1 = {
    "hamlet" : {"name" : "Hamlet" , "type": "tragedy"},
    "as-like" : {"name": "As You Like It", "type" : "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

console.log(statement(invoiceDatas1[0],plays1))
console.log(htmlStatement(invoiceDatas1[0],plays1))