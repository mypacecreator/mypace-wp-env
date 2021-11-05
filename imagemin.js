/*
    See https://techblog.lclco.com/entry/2018/08/31/180000
    See https://qiita.com/k-gen/items/79812b04593b233b1ac1
*/

const imagemin         = require("imagemin-keep-folder")
const imageminMozjpeg  = require("imagemin-mozjpeg")
const imageminPngquant = require("imagemin-pngquant")
const imageminGifsicle = require("imagemin-gifsicle")
const imageminSvgo     = require("imagemin-svgo")

imagemin(['cms/wp-content/themes/blank_theme/src/img/**/*.{jpg,png,gif,svg}'], {
    plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.65, 0.8] }), //'65-80'←この書き方だとエラー出た
        imageminGifsicle(),
        imageminSvgo()
    ],
    replaceOutputDir: output => {
        return output.replace(/img\//, '../assets/img/')
    }
}).then(() => {
    console.log('Images optimized');
});
