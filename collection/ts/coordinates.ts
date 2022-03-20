export interface Coordinates {
    /**
     * @maxLength 9
     */
    longitude: number
    /**
     * @maxLength 9
     */
    latitude: number
    /**
     * The accuracy of the supplied coordinates in meters.
     * If we form a circle with a radius of collected.coordinates.geoPositionAccuracy meters around the point collected.coordinates.geoPositionX / collected.coordinates.geoPositionY, then the true location is in this circle with 68% probability. Probably a normal distribution, i.e. with probability 95% in the circle with radius 2 * collected.coordinates.geoPositionAccuracy.
     * The value 0.0 means that the precision is unknown.
     * See also https://developer.android.com/reference/android/location/Location#getAccuracy()
     * @maxLength 9
     */
    accuracy: number
}
