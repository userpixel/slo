import { config } from "../config.js"
import { clamp } from "../lib/math.js"
import { inRange } from "../lib/validation.js"
import { SLO } from "./slo.js"

export class Thresholds {
    constructor(
        slo,
        lower = config.lowerThreshold.default,
        upper = config.upperThreshold.default,
    ) {
        if (!(slo instanceof SLO)) {
            throw new TypeError(`Thresholds: slo must be an instance of SLO. Got ${ slo }`)
        }
        this.slo = slo

        if (!inRange(lower, config.lowerThreshold.min, config.lowerThreshold.max)) {
            throw new RangeError(`SLO: lowerThreshold must be a number between ${ config.lowerThreshold.min } and ${ config.lowerThreshold.max }. Got ${ lower }`)
        }
        this._lower = lower
        
        if (!inRange(upper, config.upperThreshold.min, config.upperThreshold.max)) {
            throw new RangeError(`SLO: upperThreshold must be a number between ${ config.upperThreshold.min } and ${ config.upperThreshold.max }. Got ${ upper }`)
        }
        this._upper = upper
        
        if (this.lower > this.upper) {
            throw new RangeError(`SLO: lowerThreshold must be less than upperThreshold. Got lowerThreshold=${ lower } and upperThreshold=${ upper }`)
        }

        this.equalTo = '$ET'
    }

    get lowerMin() {
        return config.lowerThreshold.min
    }

    get lowerMax() {
        return this.slo.sli.condition.isUpperBounded ? this.upper : config.lowerThreshold.max
    }

    get upperMin() {
        return this.slo.sli.condition.isLowerBounded ? this.lower : config.upperThreshold.min
    }

    get upperMax() {
        return config.upperThreshold.max
    }

    get lower() {
        return this._lower
    }

    set lower(val) {
        this._lower = clamp(val, this.lowerMin, this.lowerMax)
        if (this._lower > this._upper) {
            this.upper = this._lower
        }
    }

    get upper() {
        return this._upper
    }

    set upper(val) {
        this._upper = clamp(val, this.upperMin, this.upperMax)
        if (this._upper < this._lower) {
            this.lower = this._upper
        }
    }

}