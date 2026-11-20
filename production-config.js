/* Production connection review candidate. Public identifiers only; no secrets. */
window.HOSSHII_PRODUCTION_CONFIG = Object.freeze({
  enabled: true,
  storageNamespace: 'production',
  legacyReviewPublicKey: null, // No production review issuer/key has been configured.
  liffId: '2011929118-Fyk1pdlU',
  statusEndpoint: 'https://urwmuafkmlgzanpiksfv.supabase.co/functions/v1/line-trial-status',
  backupEndpoint: 'https://urwmuafkmlgzanpiksfv.supabase.co/functions/v1/hosshii-backup'
});
window.hosshiiReadOnly = true;
window.hosshiiProductionReady = function () {
  const c = window.HOSSHII_PRODUCTION_CONFIG;
  return c.enabled === true
    && c.storageNamespace === 'production'
    && c.liffId === '2011929118-Fyk1pdlU'
    && c.statusEndpoint === 'https://urwmuafkmlgzanpiksfv.supabase.co/functions/v1/line-trial-status'
    && c.backupEndpoint === 'https://urwmuafkmlgzanpiksfv.supabase.co/functions/v1/hosshii-backup'
    && window.location.origin === 'https://shift-app2026.github.io'
    && ['/hosshii-shift-line/', '/hosshii-shift-line/index.html'].includes(window.location.pathname);
};
