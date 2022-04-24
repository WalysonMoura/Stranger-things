const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
       'dist/script.js': './js//app.js',
       'dist/main.css~': './scss/style.scss'
   },
   output : {
       path: __dirname+'/',
       filename: '[name]'
   },
   devServer: {
      inline: true,
      contentBase: './',
      port: 3006
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2'] }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })

            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              loader: "url-loader?limit=1000000&name=images/[name].[ext]"
            }
        ]
    },
    plugins: [
       new ExtractTextPlugin('./dist/main.css')

    ]
};
