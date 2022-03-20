import { Metadata } from './metadata'
import { CollectedEvent } from './collectedEvent'
import { CollectionFailedEvent } from './collectionFailedEvent'

export interface MailpieceEvent {
    /**
     * The consignments national or international id, primary key 🔑.
     * @pattern \d{18}|([A-Z]{2}\d{9}[A-Z]{2})
     *
     */
    mailpieceId: string
    /**
     * Collected successful event for a mail piece
     */
    collected?: CollectedEvent
    /**
     * Collected failed event for a mail piece
     */
    collectionFailed?: CollectionFailedEvent
    /**
     * This metadata is only used by legacy systems, new consumers must not rely on it.
     */
    metadata?: Metadata
}
