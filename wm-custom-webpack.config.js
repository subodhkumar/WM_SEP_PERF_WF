const CompressionPlugin = require(`compression-webpack-plugin`);
const BrotliPlugin = require(`brotli-webpack-plugin`);
const path = require(`path`);
module.exports = {
    resolve:{
        alias:{
            themes: path.resolve(__dirname,`src/assets/themes/`)
        }
    },
    plugins:[
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/
        }),
        new CompressionPlugin({
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
            filename(info){
                let opFile= info.path.split('.'),
                opFileType =  opFile.pop(),
                opFileName = opFile.join('.');
                return `${opFileName}.gz.${opFileType}`;
            }
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    minSize: 1000000,
                    maxSize: 1000000,
                    test: /[\\/]node_modules(?![\\/]wm)[\\/]/
                }
            }
        }
    }
}
