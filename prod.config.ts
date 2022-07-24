const  path = require("path");
const  HtmlWebpackPlugin =  require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports= {
  /** "mode"
   * the environment - development, production, none. tells webpack 
   * to use its built-in optimizations accordingly. default is production 
   */
  mode: "production",
  /** "entry"
   * the entry point 
   */
  entry: "./index.tsx",
  output: {
    /** "path"
     * the folder path of the output file 
     */
    path: path.resolve(__dirname, "dist/"),
    /** "filename"
     * the name of the output file 
     */
    filename: "main.js"
  },
  resolve: {
    /** "extensions" 
     * If multiple files share the same name but have different extensions, webpack will 
     * resolve the one with the extension listed first in the array and skip the rest. 
     * This is what enables users to leave off the extension when importing
     */
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"]
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
     * file inside of a require()/import statement, use the babel-loader to transform it before you 
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
     * being searched"
     */
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: {
        description: "Application description goes here.",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      scriptLoading: "defer",
      template: path.resolve(__dirname, "public/index.ejs"),
      title: "Application",
    })
  ]
}