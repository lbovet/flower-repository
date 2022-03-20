export interface Overwrite {
    /**
     * If value is available, it overwrite *.deliveryArea
     * Number of the delivery area, e.g. 010.
     * Missing digits are completed with leading 0
     * @minLength 3
     * @maxLength 3
     *
     */
    deliveryArea?: string
    /**
     * If value is available, it overwrite *.distributionBasePostcode6
     * The postal code 6 numbers identifying the distribution base,
     * e.g. 821070.
     * @minLength 6
     * @maxLength 6
     */
    distributionBasePostcode6?: string
}
