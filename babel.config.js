// @generated: @expo/next-adapter@2.1.9
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

// eslint-disable-next-line func-names
module.exports = function (api) {
    const isServer = api.caller((caller) => caller?.isServer)
    const isCallerDevelopment = api.caller((caller) => caller?.isDev)
    api.cache(true)
    return {
        presets: [['@expo/next-adapter/babel']],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: true,
                },
            ],
            [
                '@babel/plugin-proposal-private-methods',
                {
                    loose: true,
                },
            ],
            [
                '@babel/plugin-proposal-private-property-in-object',
                {
                    loose: true,
                },
            ],
        ],
    }
}
