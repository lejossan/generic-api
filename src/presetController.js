Preset = require('./presetModel');

//For index
exports.index = function (req, res) {
    Preset.get(function (err, preset) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Presets Successfully!",
            data: preset       
        });
    });
};

//For creating a new preset
exports.add = (req, res) => {
    //authorize user here ->
    var preset = new Preset();
    preset.name = req.body.name? req.body.name: preset.name;
    preset.description = req.body.description;
    preset.url = req.body.url;
    preset.author = req.body.author;

//Save and check error
preset.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: "New Preset Added!",
            data: preset
        });
    });
};

// View Preset
exports.view = (req, res) => {
    Preset.findById(req.params.preset_id, function (err, preset) {
        if (err)
            res.send(err);
        res.json({
            message: 'Preset Details',
            data: preset
        });
    });
};

// Search
exports.search = (req, res) => {
    Preset.find({ name: { $regex: req.params.query, $options: 'i' } }, function(err, result) {
        if (err)
            res.send(err);
        res.json({
            message: 'Preset Details',
            data: result
        });
    });
}
// Update Preset
exports.update = (req, res) => {
    Preset.findById(req.params.preset_id, function (err, preset) {
        if (err)
            res.send(err);
        preset.name = req.body.name ? req.body.name : preset.name;
        preset.description = req.body.description;
        preset.url = req.body.url;
        preset.author = req.body.author;

        //save and check errors
        preset.save((err) => {
            if (err)
                res.json(err)
            res.json({
                message: "Preset Updated Successfully",
                data: preset
            });
        });
    });
};

// Delete Preset
exports.delete = (req, res) => {
    Preset.deleteOne({
        _id: req.params.preset_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Preset Deleted'
        })
    })
}

