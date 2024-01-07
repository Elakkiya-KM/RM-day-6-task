class UberCalculator {
    constructor(baseFare, distance, duration, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.distance = distance;
        this.duration = duration;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }
    totalPrice() {
        return (
            this.baseFare +
            this.distance * this.costPerMile +
            this.duration * this.costPerMinute
        );
    }
}
const uberFare = new UberCalculator(25,5,30,50,1.5); 
console.log("The total price:" +uberFare.totalPrice());

