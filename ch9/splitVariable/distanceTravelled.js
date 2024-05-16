function distanceTravelled (scenario, time) {
        let result;
        const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
        let primaryTime = Math.min(time, scenario.delay);
        result = 0.5 * primaryAcceleration * primaryTime;
        let secondaryTime = time - scenario.delay;
        if (secondaryTime > 0) {
            let primaryVelocity = primaryAcceleration * scenario.delay;
            let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
            result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
        }
        return result;
}
