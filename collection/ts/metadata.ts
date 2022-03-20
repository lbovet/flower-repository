import { DateTime } from 'apikana/default-types'

export interface Metadata {
    /**
     * The version of the app creating the event
     * @maxLength 50
     */
    appVersion?: string
    /**
     * The device id
     * @maxLength 15
     *
     */
    deviceId?: string
    /**
     * The id of the app creating the event
     * @maxLength 10
     */
    appId?: string
    /**
     * The timestamp the request was received by NEMO backend
     */
    serverTimestamp?: DateTime
    /**
     * Id of the event [deviceId+appId+TimeStamp (LONGINT(64))],
     * e.g. 123456789012345back1349333576093
     * @maxLength 38
     */
    techId?: string
}
