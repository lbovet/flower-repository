/**
 * Possible values:
 * SCAN (1)
 * MANUAL (2)
 */
export enum CapturingType {
    SCAN,
    MANUAL
}

/**
 * Possible values:
 * SCAN (1)
 * MANUAL (2)
 * INFOSCAN
 */
export enum CapturingTypeWithInfoScan {
    SCAN,
    MANUAL,
    INFOSCAN
}

/**
 * Possible values:
 * DOOR_CLOSED -> Front door closed (1)
 * CUSTOMER_ABSENT -> Customer absent (2)
 * DELIVERY_INSTRUCTION_ONLY_SEEN_AT_DELIVERY -> Delivery instruction (Zustellanweisung - ZAW) not seen until delivery (3)
 * OTHER_REASONS -> Other reasons (4)
 */
export enum NotDeliveredReason {
    DOOR_CLOSED, // @code 1 = HAUSTUERE_GESCHLOSSEN
    CUSTOMER_ABSENT, // @code 2 = CUSTOMER_ABSENT
    DELIVERY_INSTRUCTION_ONLY_SEEN_AT_DELIVERY, // @code 3 = ZAW_ONLY_SEEN_AT_DELIVERY
    OTHER_REASONS // @code 4 = OTHER_REASONS
}

/**
 * Possible values:
 * CUSTOMER_NOT_PRESENT -> Kunde nicht anwesend (1)
 * CUSTOMER_DENIES_DELIVERY -> Kunde lehnt Uebergabe ab (2)
 * UNKNOWN_ADDRESS -> Adresse unbekannt (4)
 * NOT_AT_APPOINTED_PLACE -> Sendung nicht am vereinbarten Ort (5)
 * NOT_PREPAID -> Sendung nicht frankiert (6)
 * INSUFFICIENTLY_PACKED -> Ware ungenuegend verpackt (7)
 * CONTENT_OVERSIZE -> Ware zu gross fuer Verpackung (8)
 * ORDER_UNKNOWN_AT_CUSTOMER -> Abholauftrag bei Kunden unbekannt (9)
 * FAILED_TO_RELEASE_OUT_OF_LOCKED_BOX -> Ausloesung aus abschliessbarer Box fehlgeschlagen (10)
 * NOT_PRESENT -> Sendung nicht vorhanden (20)
 * OVERSIZE -> Sendung mit Übermass (21)
 * NEW_POSTING_WITH_OVERSIZE -> Neuaufgabe Sendung mit Übermass (22)
 */
export enum FailureReason {
    CUSTOMER_NOT_PRESENT, // @code 1 = CUSTOMER_NOT_PRESENT
    CUSTOMER_DENIES_DELIVERY, // @code 2 = CUSTOMER_DENIES_DELIVERY
    UNKNOWN_ADDRESS, // @code 4 = UNKNOWN_ADDRESS
    NOT_AT_APPOINTED_PLACE, // @code 5 = NOT_AT_APPOINTED_PLACE
    NOT_PREPAID, // @code 6 = NOT_PREPAID
    INSUFFICIENTLY_PACKED, // @code 7 = INSUFFICIENTLY_PACKED
    CONTENT_OVERSIZE, // @code 8 = TO_BIG
    ORDER_UNKNOWN_AT_CUSTOMER, // @code 9 = ORDER_UNKNOWN_AT_CUSTOMER
    FAILED_TO_RELEASE_OUT_OF_LOCKED_BOX, // @code 10 = FAILED_TO_RELEASE_OUT_OF_LOCKED_BOX
    NOT_PRESENT, // @code 20 = NOT_PRESENT
    OVERSIZE, // @code 21 = OVERSIZE
    NEW_POSTING_WITH_OVERSIZE // @code 22 = EW_POSTING_WITH_OVERSIZE
}

/**
 * Possible values:
 * AGREEMENT_WITH_RECEIVER -> Agreement with recipient (1)
 * CALL_UNSUCCESSFUL -> Call unsuccessful (2)
 * NO_OR_WRONG_PHONE_NUMBER -> No or wrong phone number (3)
 * DELIVERY_INSTRUCTION_ONLY_SEEN_AT_HANDOVER -> Delivery instruction (Zustellanweisung - ZAW) not seen until delivery (4)
 * TRIED_OTHER_NUMBER -> Tried another number (5)
 * USED_OTHER_PHONE -> Other cell phone used (6)
 */
export enum NotNotifiedReason {
    AGREEMENT_WITH_RECEIVER, // @code 1 = Agreement with recipient
    CALL_UNSUCCESSFUL, // @code 2 = Call unsuccessful
    NO_OR_WRONG_PHONE_NUMBER, // @code 3 = No or wrong phone number
    DELIVERY_INSTRUCTION_ONLY_SEEN_AT_HANDOVER, // @code 4 = Delivery instruction (Zustellanweisung - ZAW) not seen until delivery
    TRIED_OTHER_NUMBER, // @code 5 = Tried another number
    USED_OTHER_PHONE // @code 6 = Other cell phone used
}
