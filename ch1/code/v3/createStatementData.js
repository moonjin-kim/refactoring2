import { PerformanceCalculator } from "./PerformanceCalculator.js";

export function creatStatmentData(invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(enrichPerformance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result);
    return result;

    function enrichPerformance(aPerformance) {
        const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = volumeCreditsFor(result);
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
    
    // 3. 포인트 추가 함수 추출
    function volumeCreditsFor(aPerformance) {
        return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits;
    }
    
    
    //2. 공연 명 반환
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    
}