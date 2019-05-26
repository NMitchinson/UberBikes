var expect = require("chai").expect

describe("dockingStation", function() { 
    it("should add a bike", function() {
        const dockingStation = new DockingStation();
        const bike = new Bike();
        dockingStation.addBike(bike);
        expect(dockingStation.allBikes).to.have.length(1);
    });
})