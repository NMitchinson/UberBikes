var expect = require("chai").expect

const { DockingStation } = require("../js/dockingStation")

const { Bike } = require("../js/bike")

const { BikeRelease } = require("../js/bikeRelease")

const { BikeIsWorking } = require("../js/bikeIsWorking")

describe("dockingStation", function() { 
    it("should add a bike", function() {
        const dockingStation = new DockingStation();
        const bike = new Bike();
        dockingStation.addBike(bike);
        expect(dockingStation.allBikes).to.have.length(1);
    });
})

