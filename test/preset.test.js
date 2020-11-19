
const Preset = require('../src/presetModel');
const assert = require('assert');
let mongoose = require('mongoose');

before(async function () {
    //connect to mongoose
    const dbPath = 'mongodb://localhost/testCollection';
    const options = {useNewUrlParser: true, useUnifiedTopology: true}
    this.server = await mongoose.connect(dbPath, options);
});

after(async function () {
    //clean db
    Preset.deleteMany({}, function() {
        console.log('baleted');
    });
    const findResult = await Preset.find({});
    assert(findResult.length === 0);
});

describe('Creating presets', function() {
    it('should create a preset', async function() {
        const name = 'My Test Preset';
        let preset = new Preset();
        preset.name = name;
        preset.description = 'this is a description'
        preset.url = 'my_test_preset';
        preset.author = 'jossa';

        const saveResult = await preset.save();

        assert(saveResult.name === name);

        const findResult = await Preset.findOne({ name: name});
        assert(findResult);
        assert(findResult.name === name);
    });
});
