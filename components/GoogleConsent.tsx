export default function GoogleConsent() {
  return (
    <script
      id="google-consent-v2"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Google Consent Mode V2 Defaults (Strict for EU/UK, Granted for IN/US/Global)
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'region': ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'GR', 'HU', 'IE', 'LV', 'LT', 'LU', 'MT', 'PL', 'PT', 'RO', 'SK', 'SI', 'SE', 'IS', 'LI', 'NO', 'CH'],
            'wait_for_update': 500
          });

          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted',
            'wait_for_update': 500
          });

          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
        `,
      }}
    />
  );
}
