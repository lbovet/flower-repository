import { DateTime } from 'apikana/default-types'

export interface PostCapturing {
    /**
     * The timestamp the event initialized
     */
    timestamp: DateTime
    /**
     * Tour, district or service depending on process and organizational unit
     * @minLength 3
     * @maxLength 3
     *
     */
    deliveryArea: string
    /**
     * Employee personal number
     * @maxLength 8
     */
    personalNumber?: string
    /**
     * Post office zip
     * @minLength 6
     * @maxLength 6
     */
    distributionBasePostcode6?: string
}
