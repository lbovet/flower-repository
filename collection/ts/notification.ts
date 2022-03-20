import { NotNotifiedReason } from './enumeration'

export interface Notification {
    /**
     * Called phone number
     */
    phoneNumber: string
    /**
     * Called phone number
     */
    notNotifiedReason?: NotNotifiedReason
}
