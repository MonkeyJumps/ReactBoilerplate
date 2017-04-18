const webpack=require('webpack');
const path = require('path');

module.exports = {

    entry:[
        'react-hot-loader/patch',
        './src/app.js',

    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename:"app.bundle.js",
    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'file-loader?name=[name].[ext]',
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets: ['es2015','react','stage-2']
                }
            },

        ],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
    ],

};