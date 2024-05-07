import { createPerformancecalculator } from "./PerformanceCalculator.js";

export function creatStatmentData(invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(enrichPerformance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result);
    return result;

    function enrichPerformance(aPerformance) {
        const calculator = createPerformancecalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
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
    
    //2. 공연 명 반환
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    
}
