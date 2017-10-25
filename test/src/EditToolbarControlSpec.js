// TODO: Write better tests.
describe("LeafletToolbar.EditToolbar.Control", function() {
    beforeEach(function() {
        var container = document.createElement('div');
        container.id = 'map';
        document.body.appendChild(container);
    });

    // Extremely simple test to ensure that the DrawToolbar and its actions can
    // be instantiated and added to the map without throwing any exceptions.
    it("Can be added to the map", function() {
        var map = L.map('map'),
            drawnItems = new L.FeatureGroup().addTo(map),
            toolbar = new LeafletToolbar.EditToolbar.Control().addTo(map, drawnItems);

        expect(toolbar).to.be.an.instanceof(LeafletToolbar.Control);
    });
    
    afterEach(function() {
        var container = document.getElementById('map');
        container.parentNode.removeChild(container);
    });
});