import { isInstance } from '../lib/validation.js'
import { Dependency } from './dependency.js'

// If a certain service fails, what activities will it impact and how?
export class Failure {
    constructor(dependency, symptom = '', consequence = '', businessImpact = '') {
        if (!isInstance(dependency, Dependency)) {
            throw new Error(`Expected a Service instance. Got ${service}`)
        }
        this.dependency = dependency        
        this.symptom = symptom
        this.consequence = consequence
        this.businessImpact = businessImpact
    }

    toString() {
        return `${this.dependency.consumption} -x-> ${this.dependency.service} - ${this.symptom}`
    }
}