import { CapturingType } from './enumeration'
import { DateTime } from 'apikana/default-types'
import { ProductCodeCaptures } from './productcodecaptures'
import { PostCapturing } from './postcapturing'
import { Pickpost } from './pickpost'
import { Coordinates } from './coordinates'
import { Dispobox } from './dispobox'
import { Notification } from './notification'
import { DeliveryOnFloor } from './deliveryonfloor'
import { Overwrite } from './overwrite'

export interface CollectedEvent {
    /**
     * The timestamp the event was captured.
     */
    timestamp: DateTime
    /**
     * The input method used to capture the value
     */
    capturingType: CapturingType
    /**
     * Number of the delivery area, e.g. 010.
     * Missing digits are completed with leading 0
     * @minLength 3
     * @maxLength 3
     *
     */
    deliveryArea: string
    /**
     * The postal code 6 numbers identifying the distribution base,
     * e.g. 821070.
     * @minLength 6
     * @maxLength 6
     */
    distributionBasePostcode6: string
    /**
     * The employee's personal number, e.g. 09000521.
     * The employeeId contains 8 characters (all digits).
     * Missing digits are completed with leading 0
     * @pattern \d{8}
     */
    personalNumber: string
    /**
     * The captured additional products on the mail piece
     */
    productCodeCaptures?: ProductCodeCaptures[]
    /**
     * Pickup successful with barcode (1)
     */
    type: boolean
    /**
     * @pattern ^[0-9]{0,19}$
     */
    orderId?: string
    /**
     * ID to the mail piece data on which the delivery was made
     * Note: Previously, the attribute name "infoScanRecordId" was used for this.
     * @maxLength 15
     */
    mailpieceDataId?: string
    /**
     * Confirmation by the user that the same mail piece id needs to be captured multiple time, e.g. two mail pieces with the same id.
     */
    multiCapture?: boolean
    /**
     */
    dispobox?: Dispobox
    /**
     */
    notification?: Notification
    /**
     */
    deliveryOnFloor?: DeliveryOnFloor
    /**
     */
    pickpost?: Pickpost
    /**
     * Post capturing when something did not work out on the tour. Takes place in the base.
     */
    postCapturing?: PostCapturing
    /**
     */
    overwrite?: Overwrite
    /**
     */
    coordinates?: Coordinates
}
