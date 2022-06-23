const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    imgBanner: String
});

const BannerModel = mongoose.model('Banner', BannerSchema);

module.exports = BannerModel;