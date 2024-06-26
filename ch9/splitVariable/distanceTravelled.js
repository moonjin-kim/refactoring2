function distanceTravelled (scenario, time) {
    //Primary acceleration 계산
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcceleration * primaryTime;

    //Secondary acceleration 계산
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcceleration * scenario.delay;
        const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += (primaryVelocity  + 0.5 * secondaryAcceleration * secondaryTime) * secondaryTime;
    }
    return result;
}
