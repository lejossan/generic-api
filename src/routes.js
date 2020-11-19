
let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Social Preset API'
    });
});

var presetController = require('./presetController');

router.route('/preset')
    .get(presetController.index)
    .post(presetController.add);

router.route('/preset/:preset_id')
    .get(presetController.view)
    .patch(presetController.update)
    .put(presetController.update)
    .delete(presetController.delete);

router.route('/preset/search/:query')
    .get(presetController.search);

module.exports = router;