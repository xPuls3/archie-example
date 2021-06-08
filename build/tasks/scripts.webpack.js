const config = {};

const development = true;

if (development) {
    config.mode = "development";
} else {
    config.mode = "production";
}

config.output = {
    filename: "app.js"
};

config.target = "web";

config.plugins = [];

config.module = {};
config.module.rules = [];

config.module.rules.push({
    test: /\.ts$/,
    //exclude: /node_modules/,
    use: [
        {
            loader: "ts-loader",
            options: {
                transpileOnly: true
            }
        }
    ]
});

config.resolve = {
    extensions: [".ts", ".js"]
};

module.exports = config;
