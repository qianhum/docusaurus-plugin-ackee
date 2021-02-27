const path = require('path');

module.exports = function foo(context, options) {
  if (!options) {
    throw new Error(
      'You need to specify Ackee options in docusaurus.config.js',
    );
  }

  const {
    domainId,
    server,
    detailed = false,
    ignoreLocalhost = true,
    ignoreOwnVisits = true,
    ackeeTrackerFile = 'tracker.js',
  } = options;

  if (!domainId) {
    throw new Error(
      'You need to specify Ackee domainId in docusaurus.config.js',
    );
  }

  if (!server) {
    throw new Error(
      'You need to specify Ackee server in docusaurus.config.js',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-ackee-tracker',

    getClientModules() {
      return isProd ? [path.resolve(__dirname, './ackee')] : [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: server,
            },
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: `${server}/${ackeeTrackerFile}`,
            },
          },
        ],
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
            var ackeeServer = '${server}';
            var ackeeDomainId = '${domainId}';
            var ackeeDetailed = ${detailed};
            var ackeeIgnoreLocalhost = ${ignoreLocalhost};
            var ackeeIgnoreOwnVisits = ${ignoreOwnVisits};
            ackeeTracker.create('${server}', {
              detailed: ${detailed},
              ignoreLocalhost: ${ignoreLocalhost},
              ignoreOwnVisits: ${ignoreOwnVisits},
            }).record('${domainId}');
            `,
          },
        ],
      };
    },
  };
};
