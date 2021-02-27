// eslint-disable-next-line import/no-unresolved
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function bar() {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate() {
      // eslint-disable-next-line no-undef
      ackeeTracker.create(ackeeServer, {
        // eslint-disable-next-line no-undef
        detailed: ackeeDetailed,
        // eslint-disable-next-line no-undef
        ignoreLocalhost: ackeeIgnoreLocalhost,
        // eslint-disable-next-line no-undef
        ignoreOwnVisits: ackeeIgnoreOwnVisits,
      // eslint-disable-next-line no-undef
      }).record(ackeeDomainId);
    },
  };
}());
