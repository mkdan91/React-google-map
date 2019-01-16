const path = require('path');
const htmlWebPackPlugin= require('html-webpack-plugin'); 

module.exports = {
   
    entry:'./src/index.js',
    
    output: {  
        path:path.join(__dirname,'/dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules:[
            { test:/\.js$/, exclude:/node_modules/, use:{loader:'babel-loader'}},
            { test: /\.css$/,use: [{loader: "style-loader"},{loader: "css-loader"},{loader: "sass-loader"}]}
        ]
    },

    plugins:[
        new htmlWebPackPlugin({  template:'./src/index.html'})
    ],

    devServer: {  
        port: 3000,
        hot:true,  
        contentBase:'./',
        inline:true,       
        historyApiFallback: true  
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
