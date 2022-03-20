import { NotDeliveredReason } from './enumeration'

export interface DeliveryOnFloor {
    /**
     * Delivery staff delivered / tried to deliver sending on floor
     */
    deliveryAttempt: boolean
    /**
     * If deliveryAttempt = false, reason must be specified
     */
    notDeliveredReason?: NotDeliveredReason
}
