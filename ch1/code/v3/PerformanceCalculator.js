
export function createPerformancecalculator(aPerformance, aPlay) {
    switch(aPlay.type) {
        case "tragedy" : return new TragedyCalculator(aPerformance, aPlay);
        case "comedy" : return new ComedyCalculator(aPerformance, aPlay);
        default:
            throw new Error(`알 수 없는 장르: ${aPlay.type}`);
    }
}

export class PerformanceCalculator {
    performance;
    play;

    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        throw "서브 클래스로 이전";
    }

    get volumeCredits() {
        let result = 0;
        result = Math.max(this.performance.audience - 30, 0);
        return result;
    }

}

class TragedyCalculator extends PerformanceCalculator{
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 10000 + 500 * (this.performance.audience - 30);
        }
        return result;
    }

}

class ComedyCalculator extends PerformanceCalculator{
    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 1000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;
    }

    get volumeCredits() {
        return super.volumeCredits + Math.floor(this.performance.audience / 5);
    }
    
}
