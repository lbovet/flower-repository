abstract class Path {
    abstract path(): String
    url(base?: string): String {
        return (base ? base : DeliveryCollectionStreamAPIPaths.baseUrl) + this.path();
    }
}

class LogisticsDeliveryCollectionMailpieceEvent extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "logistics.delivery.collection.Mailpiece-event"; }
}

export default class DeliveryCollectionStreamAPIPaths {
    private constructor(){}
    static readonly baseUrl = "server:8080Kafka";
    static readonly basePath = "";
    private path() { return DeliveryCollectionStreamAPIPaths.basePath; }
    static readonly logisticsDeliveryCollectionMailpieceEvent = new LogisticsDeliveryCollectionMailpieceEvent(new DeliveryCollectionStreamAPIPaths());
}

