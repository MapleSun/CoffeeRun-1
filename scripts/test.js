QUnit.test( 'hello test', function( assert ) {
    assert.ok( 1 == '1', 'Passed!' );
});

QUnit.test('8.10 DataStore ', function (assert){
    var ds = window.myTruck.db;
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    assert.deepEqual({'m@bond.com':'tea', 'james@bond.com': 'eshpressho'}, ds.getAll());
    assert.equal('tea', ds.get('m@bond.com'));
    ds.remove('james@bond.com');
    assert.ok(undefined === ds.get('james@bond.com'));
});

QUnit.test('8.32 Truck', function (assert){
    var myTruck = window.myTruck;
    myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
    myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
    myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
    myTruck.printOrders();
    // I change the deliverOrder function to return the output.
    // This make it easy to test the result
    assert.equal('Delivering order for dr@no.com', myTruck.deliverOrder('dr@no.com'));
    assert.equal('Delivering order for m@bond.com', myTruck.deliverOrder('m@bond.com'));
});
