module.exports = {
    presets: [
        'module:metro-react-native-babel-preset',
        'react-native-stage-0/decorator-support',
        'react-native-dotenv',
    ],
    env: {
        production: {
            plugins: [
                'transform-remove-console',
            ]
        }
    }
};