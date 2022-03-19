abstract class Path {
    abstract path(): String
    url(base?: string): String {
        return (base ? base : FlowerDeliveryStreamAPIPaths.baseUrl) + this.path();
    }
}

class FlowerDeliveryOrderEvent extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "flower.delivery.Order-event"; }
}

export default class FlowerDeliveryStreamAPIPaths {
    private constructor(){}
    static readonly baseUrl = "";
    static readonly basePath = "";
    private path() { return FlowerDeliveryStreamAPIPaths.basePath; }
    static readonly flowerDeliveryOrderEvent = new FlowerDeliveryOrderEvent(new FlowerDeliveryStreamAPIPaths());
}

