// Single source of truth for the start page comparison.
// Every statement about another app needs a source from the vendor itself
// (help page, pricing page, App Store listing). Leave out what cannot be verified.
// Renew `comparisonCheckedOn` whenever a statement is added or checked again.

export interface SourceLink {
  label: string;
  url: string;
}

export type Verdict = 'yes' | 'no' | 'partly' | 'unknown';

export type AppIdentifier =
  | 'mailSimple'
  | 'appleMail'
  | 'gmail'
  | 'outlook'
  | 'spark'
  | 'gmxWebDe'
  | 'telekomMail';

export interface ComparedApp {
  identifier: AppIdentifier;
  name: string;
}

export interface ComparisonCell {
  verdict: Verdict;
  note?: string;
  source?: SourceLink;
}

export interface ComparisonRow {
  question: string;
  cells: Record<AppIdentifier, ComparisonCell>;
}

export interface Advantage {
  title: string;
  text: string;
}

export interface Limitation {
  title: string;
  shortAnswer: string;
  reason: string;
  ourChoice?: string;
  sources: SourceLink[];
  isPlanned: boolean;
}

export const comparisonCheckedOn = '18. November 2026';

export const comparedApps: ComparedApp[] = [
  { identifier: 'mailSimple', name: 'MailSimple' },
  { identifier: 'appleMail', name: 'Apple Mail' },
  { identifier: 'gmail', name: 'Gmail' },
  { identifier: 'outlook', name: 'Outlook' },
  { identifier: 'spark', name: 'Spark' },
  { identifier: 'gmxWebDe', name: 'GMX und WEB.DE' },
  { identifier: 'telekomMail', name: 'Telekom Mail' },
];

const appStoreOutlook: SourceLink = {
  label: 'App Store, Outlook',
  url: 'https://apps.apple.com/de/app/microsoft-outlook/id951937596',
};
const appStoreAppleMail: SourceLink = {
  label: 'App Store, Apple Mail',
  url: 'https://apps.apple.com/de/app/mail/id1108187098',
};
const appStoreGmail: SourceLink = {
  label: 'App Store, Gmail',
  url: 'https://apps.apple.com/de/app/gmail-e-mail-von-google/id422689480',
};
const appStoreTelekomMail: SourceLink = {
  label: 'App Store, Telekom Mail',
  url: 'https://apps.apple.com/de/app/telekom-mail-e-mail-app/id803009523',
};
const sparkPrivacy: SourceLink = {
  label: 'Readdle-Hilfe zum Datenschutz',
  url: 'https://support.readdle.com/spark/privacy/privacy-explained',
};

export const comparisonRows: ComparisonRow[] = [
  {
    question: 'Mails gehen nicht über Computer des App-Herstellers',
    cells: {
      mailSimple: { verdict: 'yes' },
      appleMail: { verdict: 'unknown' },
      gmail: { verdict: 'unknown' },
      outlook: {
        verdict: 'no',
        note: 'Trägst du ein Gmail-, iCloud- oder anderes Konto ein, kopiert Outlook deine Mails, Kontakte und Termine auf Computer von Microsoft.',
        source: {
          label: 'Microsoft-Hilfe',
          url: 'https://support.microsoft.com/en-us/outlook/getstarted/sync-your-account-in-outlook-to-the-microsoft-cloud',
        },
      },
      spark: {
        verdict: 'no',
        note: 'Bei vielen Konten speichert Spark deinen Anmeldenamen und dein Passwort verschlüsselt auf eigenen Computern. Für Mitteilungen speichert Spark dort auch Betreff und Textanfang neuer Mails, für einige Stunden.',
        source: sparkPrivacy,
      },
      gmxWebDe: {
        verdict: 'yes',
        note: 'Die App kommt von deinem Mail-Anbieter selbst. Deine Mails liegen ohnehin bei ihm, ein weiterer Hersteller ist nicht beteiligt.',
      },
      telekomMail: {
        verdict: 'yes',
        note: 'Die App kommt von deinem Mail-Anbieter selbst. Deine Mails liegen ohnehin bei ihm, ein weiterer Hersteller ist nicht beteiligt.',
      },
    },
  },
  {
    question: 'Ohne Werbung',
    cells: {
      mailSimple: { verdict: 'yes' },
      appleMail: {
        verdict: 'yes',
        note: 'Im App Store fehlt der Hinweis „Enthält Werbung“, den zum Beispiel Outlook und GMX dort haben.',
        source: appStoreAppleMail,
      },
      gmail: {
        verdict: 'no',
        note: 'Google schreibt: „In Gmail wird Ihnen Werbung angezeigt.“',
        source: { label: 'Gmail-Hilfe zu Werbung', url: 'https://support.google.com/mail/answer/6603?hl=de' },
      },
      outlook: {
        verdict: 'no',
        note: 'Die kostenlose Version zeigt Werbung. Ohne Werbung geht es mit einem Microsoft-365-Abo.',
        source: { label: 'Microsoft-Hilfe zu Werbung', url: 'https://support.microsoft.com/en-us/outlook/about-ads-in-outlook' },
      },
      spark: { verdict: 'unknown' },
      gmxWebDe: {
        verdict: 'no',
        note: 'Im App Store steht „Enthält Werbung“.',
        source: { label: 'App Store, GMX', url: 'https://apps.apple.com/de/app/gmx-mail-cloud-news/id417352269' },
      },
      telekomMail: {
        verdict: 'no',
        note: 'Zwischen den Mails steht Werbung.',
        source: appStoreTelekomMail,
      },
    },
  },
  {
    question: 'Konten verschiedener Anbieter in einer App',
    cells: {
      mailSimple: {
        verdict: 'yes',
        note: 'Gmail, iCloud, GMX, WEB.DE, T-Online und viele andere. Konten von Microsoft gehen noch nicht, siehe „Diese Postfächer funktionieren“.',
      },
      appleMail: {
        verdict: 'yes',
        note: 'Apple nennt iCloud, Gmail, Exchange, Yahoo und Outlook und zeigt auf Wunsch alle Konten in einem Posteingang.',
        source: appStoreAppleMail,
      },
      gmail: {
        verdict: 'yes',
        note: 'Du kannst Konten verschiedener Anbieter verbinden und zwischen ihnen wechseln.',
        source: appStoreGmail,
      },
      outlook: {
        verdict: 'yes',
        note: 'Microsoft nennt unter anderem Gmail, Yahoo Mail und iCloud.',
        source: appStoreOutlook,
      },
      spark: {
        verdict: 'yes',
        note: 'Schon die kostenlose Version erlaubt beliebig viele Konten.',
        source: { label: 'Spark-Preise', url: 'https://sparkmailapp.com/pricing' },
      },
      gmxWebDe: {
        verdict: 'unknown',
        note: 'Die Hilfe beschreibt nur, wie du weitere GMX-Konten hinzufügst.',
        source: { label: 'GMX-Hilfe', url: 'https://hilfe.gmx.net/ios/einstellungen/mehrere-konten.html' },
      },
      telekomMail: {
        verdict: 'no',
        note: 'Postfächer anderer Anbieter lassen sich nicht mehr einbinden.',
        source: appStoreTelekomMail,
      },
    },
  },
  {
    question: 'Bilder in Mails erst auf Wunsch laden',
    cells: {
      mailSimple: {
        verdict: 'yes',
        note: 'Bilder kommen erst, wenn du darauf tippst. So erfährt der Absender nicht automatisch, wann du seine Mail öffnest.',
      },
      appleMail: {
        verdict: 'partly',
        note: 'Der „Mail-Datenschutz“ schützt dich beim Laden von Bildern: Absender sehen nicht, wo du gerade bist.',
        source: { label: 'Apple-Hilfe', url: 'https://support.apple.com/de-de/102289' },
      },
      gmail: {
        verdict: 'partly',
        note: 'Bilder werden normalerweise sofort geladen. Laut Google sehen Absender dann manchmal, dass du die Mail geöffnet hast.',
        source: { label: 'Gmail-Hilfe zu Bildern', url: 'https://support.google.com/mail/answer/145919?hl=de' },
      },
      outlook: { verdict: 'unknown' },
      spark: {
        verdict: 'partly',
        note: 'Es gibt einen Schalter, mit dem du das Laden von Bildern abstellen kannst.',
        source: {
          label: 'Spark-Blog',
          url: 'https://sparkmailapp.com/blog/essential-features-good-email-app-must-have',
        },
      },
      gmxWebDe: { verdict: 'unknown' },
      telekomMail: { verdict: 'unknown' },
    },
  },
  {
    question: 'Hinweis bei neuer Mail',
    cells: {
      mailSimple: {
        verdict: 'partly',
        note: 'Dein iPhone meldet neue Mails selbst, aber nicht sofort. Bei geöffneter App kommt der Hinweis gleich, sonst entscheidet iOS, wann die App nachschaut. Warum, steht weiter unten.',
      },
      appleMail: {
        verdict: 'yes',
        note: 'Apple nennt Mitteilungen, zum Beispiel für wichtige Kontakte.',
        source: appStoreAppleMail,
      },
      gmail: {
        verdict: 'yes',
        note: 'Google nennt Benachrichtigungen in Echtzeit.',
        source: appStoreGmail,
      },
      outlook: { verdict: 'unknown' },
      spark: {
        verdict: 'yes',
        note: 'Dafür nutzt Spark eigene Computer, siehe Anmerkung oben.',
        source: sparkPrivacy,
      },
      gmxWebDe: {
        verdict: 'yes',
        note: 'GMX nennt Push-Mitteilungen bei neuen Mails.',
        source: { label: 'GMX-Fragen zur App', url: 'https://gmx.net/produkte/mobile/mail-app/faq' },
      },
      telekomMail: {
        verdict: 'yes',
        note: 'Die Telekom nennt eine sofortige Benachrichtigung bei neuen Mails.',
        source: appStoreTelekomMail,
      },
    },
  },
  {
    question: 'Kostenlos',
    cells: {
      mailSimple: { verdict: 'yes', note: 'Zurzeit kostenlos.' },
      appleMail: { verdict: 'yes', source: appStoreAppleMail, note: 'Ist auf dem iPhone schon dabei.' },
      gmail: { verdict: 'yes', note: 'Kostenlos, mit Werbung.', source: appStoreGmail },
      outlook: { verdict: 'yes', note: 'Kostenlos, mit Werbung. Abos kosten extra.', source: appStoreOutlook },
      spark: {
        verdict: 'partly',
        note: 'Die Grundversion ist kostenlos. Spark Plus kostet 10\u00a0€ im Monat.',
        source: { label: 'Spark-Preise', url: 'https://sparkmailapp.com/pricing' },
      },
      gmxWebDe: {
        verdict: 'yes',
        note: 'Kostenlos, mit Werbung. Ohne fremde Werbung im Postfach kostet GMX ProMail 3,99\u00a0€ im Monat.',
        source: { label: 'GMX ProMail', url: 'https://www.gmx.net/mail/promail/' },
      },
      telekomMail: { verdict: 'yes', note: 'Kostenlos, mit Werbung.', source: appStoreTelekomMail },
    },
  },
];

export const advantages: Advantage[] = [
  {
    title: 'Kein Umweg über andere Firmen',
    text: 'Deine Mails gehen nur zwischen deinem iPhone und deinem Mail-Anbieter hin und her. Das gilt auch für dein Passwort. Wir haben keinen eigenen Computer, auf dem deine Post liegt. Was die App sonst ins Internet schickt, zeigt sie dir unter „Verbindungen“.',
  },
  {
    title: 'Alle Postfächer in einer App',
    text: 'Gmail, iCloud, GMX, WEB.DE, T-Online und viele andere. Auf Wunsch siehst du alle Posteingänge zusammen.',
  },
  {
    title: 'Mails von einem Konto ins andere bringen',
    text: 'Du kannst eine Mail zum Beispiel von GMX zu Gmail schieben. MailSimple löscht sie im alten Konto erst, wenn sie im neuen angekommen und geprüft ist.',
  },
  {
    title: 'Absender erfahren nicht automatisch, wann du liest',
    text: 'Viele Werbe-Mails enthalten unsichtbare Bilder. Wird so ein Bild geladen, sieht der Absender, wann du die Mail geöffnet hast. MailSimple lädt Bilder erst, wenn du darauf tippst.',
  },
];

export const smallerAdvantages: string[] = [
  'Newsletter mit einem Tipp abbestellen',
  'Gesendete Mail für ein paar Sekunden zurückholen',
  'Erinnerung, wenn du einen Anhang erwähnst, aber vergessen hast',
  'App mit Face ID sperren',
  'Mails durchsuchen, auch ohne Internet (die Suche läuft auf dem iPhone)',
  'Mails zurückstellen, bis du sie später wieder sehen willst',
  'Mails von unbekannten Absendern auf Wunsch getrennt anzeigen',
  'Regeln, die neue Mails in Ordner legen oder als gelesen markieren (sie laufen auf dem iPhone)',
  'Lange Mails auf dem iPhone zusammenfassen lassen (nur mit Apple Intelligence)',
];

export const limitations: Limitation[] = [
  {
    title: 'Hinweise bei neuer Mail kommen nicht sofort',
    shortAnswer:
      'Ist die App offen, meldet sie neue Mails gleich. Ist sie zu, kommt der Hinweis oft erst nach 15 Minuten bis einigen Stunden.',
    reason:
      'Stell dir einen Pförtner vor, der Tag und Nacht an deinem Briefkasten steht. Kommt Post, klingelt er bei dir. Dafür braucht er aber deinen Briefkastenschlüssel. So machen es manche Apps, Spark zum Beispiel: Ein Computer der Firma schaut für dich in dein Postfach.',
    ourChoice:
      'Weil dein Schlüssel bei dir bleiben soll. Wer deinen Schlüssel hat, kann deine Post lesen. Und ein Pförtner mit den Schlüsseln vieler Menschen lockt Diebe an. Darum gibt es bei MailSimple keinen Pförtner. Ist die App zu, entscheidet das iPhone, wann sie kurz nachschauen darf. Das kann bei wenig Akku, im Stromsparmodus oder wenn du die App selten nutzt länger dauern. Du kannst den Abstand in den Einstellungen wählen oder das Abrufen ausschalten.',
    sources: [
      sparkPrivacy,
      {
        label: 'Apple-Entwicklerdokumentation',
        url: 'https://developer.apple.com/documentation/backgroundtasks/choosing-background-strategies-for-your-app',
      },
    ],
    isPlanned: false,
  },
];

export interface ProviderFinePrint {
  title: string;
  text: string;
  source?: SourceLink;
}

// Names match the presets in the app's providers.json.
export const supportedProviders: string[] = [
  'Gmail',
  'iCloud',
  'GMX',
  'WEB.DE',
  'T-Online',
  'freenet',
  'Posteo',
  'mailbox.org',
];

export const providerFinePrint: ProviderFinePrint[] = [
  {
    title: 'Keine Konten von Microsoft',
    text: 'Adressen von Outlook.com, Hotmail und Live funktionieren nicht. Microsoft verlangt seit September 2024 eine besondere Art der Anmeldung. Dabei meldest du dich auf einer Seite von Microsoft an, statt dein Passwort in die App einzutippen. Das kann MailSimple noch nicht.',
    source: {
      label: 'Microsoft-Ankündigung',
      url: 'https://techcommunity.microsoft.com/blog/outlook/keeping-our-outlook-personal-email-users-safe-reinforcing-our-commitment-to-secu/4164184',
    },
  },
  {
    title: 'Extra-Passwort bei Gmail, iCloud und T-Online',
    text: 'Diese Anbieter lassen Mail-Apps nicht mit deinem normalen Passwort hinein. Du erzeugst bei ihnen ein zweites Passwort nur für MailSimple. Wie das bei Gmail und iCloud geht, steht auf der Support-Seite.',
  },
];
