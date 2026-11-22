/// URL bar ///
user_pref("browser.urlbar.suggest.trending", false); // Disable trending suggestions
user_pref("browser.urlbar.trimURLs", false); // Show full URLs

/// AI and machine learning ///
user_pref("browser.ai.control.default", "blocked"); // Block AI features by default
user_pref("browser.ml.chat.enabled", false); // Disable AI chatbot
user_pref("browser.ml.chat.page", false); // Disable AI page chat
user_pref("browser.ai.control.sidebarChatbot", false); // Disable sidebar chatbot
user_pref("browser.ml.linkPreview.enabled", false); // Disable AI link previews
user_pref("browser.tabs.groups.smart.userEnabled", false); // Disable automatic tab grouping

/// Translations ///
user_pref("browser.translations.enable", false); // Disable translations
user_pref("browser.translations.automaticallyPopup", false); // Disable translation prompts

/// Mozilla account and recommendations ///
user_pref("identity.fxaccounts.enabled", false); // Disable Mozilla account integration
user_pref("services.sync.engine.prefs", false); // Disable preference synchronization
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false); // Disable Firefox recommendations

/// Browser notifications and onboarding ///
user_pref("browser.shell.checkDefaultBrowser", false); // Disable default browser checks
user_pref("browser.defaultbrowser.notificationbar", false); // Disable default browser notifications
user_pref("browser.aboutwelcome.enabled", false); // Disable welcome screen

/// Password manager ///
user_pref("signon.rememberSignons", false); // Disable password saving
user_pref("signon.autofillForms", false); // Disable password autofill
user_pref("signon.formlessCapture.enabled", false); // Disable form-less password capture
user_pref("signon.generation.enabled", false); // Disable password generation

/// Autofill ///
user_pref("extensions.formautofill.creditCards.enabled", false); // Disable credit card autofill
user_pref("extensions.formautofill.creditCards.available", false); // Disable credit card autofill availability
user_pref("extensions.formautofill.creditCards.hideui", true); // Hide credit card autofill UI
user_pref("extensions.formautofill.addresses.enabled", false); // Disable address autofill
user_pref("extensions.formautofill.addresses.available", false); // Disable address autofill availability
user_pref("extensions.formautofill.addresses.hideui", true); // Hide address autofill UI

/// Connection security ///
user_pref("dom.security.https_only_mode", true); // Enforce HTTPS connections
user_pref("dom.security.https_only_mode_pbm", true); // Enforce HTTPS in private windows

/// Permissions ///
user_pref("permissions.default.geo", 2); // Block location access by default
user_pref("permissions.default.desktop-notification", 2); // Block notifications by default

/// Startup and new tab ///
user_pref("browser.newtabpage.enabled", false); // Disable new tab content
user_pref("browser.newtab.url", "about:blank"); // Set new tab to blank page
user_pref("browser.startup.homepage", "about:blank"); // Set homepage to blank page
user_pref("browser.startup.page", 0); // Restore blank startup behavior

/// UI settings ///
user_pref("browser.toolbars.bookmarks.visibility", "never"); // Hide bookmarks toolbar

/// Telemetry and data collection ///
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Disable data submission
user_pref("datareporting.healthreport.uploadEnabled", false); // Disable telemetry and Glean uploads
user_pref("datareporting.healthreport.service.enabled", false); // Disable Health Report service
user_pref("datareporting.usage.uploadEnabled", false); // Disable usage data uploads

user_pref("toolkit.telemetry.enabled", false); // Disable telemetry
user_pref("toolkit.telemetry.unified", false); // Disable unified telemetry
user_pref("toolkit.telemetry.archive.enabled", false); // Disable telemetry archive
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // Disable shutdown pings
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false); // Disable first-session shutdown pings
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // Disable first shutdown ping
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // Disable new profile ping
user_pref("toolkit.telemetry.updatePing.enabled", false); // Disable update ping
user_pref("toolkit.telemetry.healthping.enabled", false); // Disable health pings

/// Experiments and studies ///
user_pref("app.shield.optoutstudies.enabled", false); // Disable Shield studies
user_pref("app.normandy.enabled", false); // Disable Normandy experiments
user_pref("app.normandy.api_url", ""); // Disable Normandy API

/// Pocket ///
user_pref("extensions.pocket.enabled", false); // Disable Pocket

/// Fingerprinting protection ///
user_pref("privacy.fingerprintingProtection", true); // Enable fingerprinting protection
user_pref("privacy.fingerprintingProtection.pbmode", true); // Enable fingerprinting protection in private windows

/// Crash reports ///
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // Disable automatic crash report submission
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false); // Disable automatic crash report submission
user_pref("breakpad.reportURL", ""); // Disable crash report submission URL

/// Tracking protection ///
user_pref("privacy.trackingprotection.enabled", true); // Enable tracking protection
user_pref("privacy.trackingprotection.pbmode.enabled", true); // Enable tracking protection in private windows
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // Block cryptominers
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // Block known fingerprinters
user_pref("privacy.trackingprotection.emailtracking.enabled", true); // Block email trackers

/// Search privacy ///
user_pref("browser.search.suggest.enabled", false); // Disable search suggestions
user_pref("browser.urlbar.suggest.searches", false); // Disable search suggestions in URL bar

// ???
user_pref("media.peerconnection.ice.no_host", true);

// https://github.com/arkenfox/user.js/blob/master/user.js
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Sponsored stories
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // [FF140+] Support Firefox

user_pref("browser.newtabpage.activity-stream.default.sites", "");

user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.amp.featureGate", false); // [FF141+] adMarketplace
user_pref("browser.urlbar.importantDates.featureGate", false); // [FF143+]
user_pref("browser.urlbar.market.featureGate", false); // [FF143+] stock market
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+]
user_pref("browser.urlbar.wikipedia.featureGate", false); // [FF141+]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+]
user_pref("browser.urlbar.yelpRealtime.featureGate", false); // [FF144+]

user_pref("browser.formfill.enable", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
// user_pref("security.cert_pinning.enforcement_level", 2);

user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
//user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);

user_pref("devtools.debugger.remote-enabled", false);

user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT: false]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT: 0]
/* 2635: disable referrer and storage access for resources injected by content scripts [FF139+] ***/
user_pref("privacy.antitracking.isolateContentScriptResources", true);
/* 2640: disable CSP Level 2 Reporting [FF140+] ***/
user_pref("security.csp.reporting.enabled", false);

user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]

user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("browser.contentblocking.category", "strict");
