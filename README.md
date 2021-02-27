# docusaurus-plugin-ackee

Use [Ackee](https://github.com/electerious/Ackee) in your [Docusaurus](https://github.com/facebook/docusaurus) site.

Requires a running Ackee server.

## Install

```zsh
yarn add docusaurus-plugin-ackee
```

or

```zsh
npm install docusaurus-plugin-ackee
```

## Usage

```javascript
// In your docusaurus.config.js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-ackee',
      {
        // Ackee domain ID
        domainId: 'your_ackee_domain_id',

        // URL to your Ackee server
        // MUST NOT END WITH SLASH ('/')
        server: 'https://analytics.example.com',

        // Enable or disable tracking of personal data (OS, device, browser, screen size, user language)
        detailed: false,

        // Enable or disable tracking when on localhost
        ignoreLocalhost: true,

        // Enable or disable the tracking of your own visits
        // Enabled by default, should be turned off when using a wildcard Access-Control-Allow-Origin header
        // Some browsers may strictly block third-party cookies and this option will have no impact in this situation
        ignoreOwnVisits: true,

        // Ackee tracker file name
        // More information can be found [here](https://github.com/electerious/Ackee/blob/master/docs/Options.md#tracker)
        ackeeTrackerFile: 'tracer.js',
      },
    ],
  ],
}
```

## License

MIT
