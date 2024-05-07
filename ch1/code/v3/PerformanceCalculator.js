export class PerformanceCalculator {
    performance;
    play;

    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        let result = 0;
    
        switch (this.play.type) {
            case "tragedy": //비극
                result = 40000;
                if (this.performance.audience > 30) {
                    result += 10000 + 500 * (this.performance.audience - 30);
                }
                break;
            case "comedy": //희극
                result = 30000;
                if (this.performance.audience > 20) {
                    result += 10000 + 500 * (this.performance.audience - 20);
                }
                result += 300 * this.performance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르: ${this.play.type}`);
        }
    
        return result;
    }

    get volumeCredits() {
        let result = 0;
        result = Math.max(this.performance.audience - 30, 0);
            // 희극 관객 5명마다 추가 포인트를 제공한다.
        if ("comedy" == this.play.type) 
            result += Math.floor(this.performance.audience / 5);
        return result;
    }

    // // 3. 포인트 추가 함수 추출
    // function volumeCreditsFor(perf) {
    //     let result = 0;
    //     result = Math.max(perf.audience - 30, 0);
    //         // 희극 관객 5명마다 추가 포인트를 제공한다.
    //     if ("comedy" == playFor(perf).type) 
    //         result += Math.floor(perf.audience / 5);
    //     return result;
    // }
}