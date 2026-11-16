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
  sources: SourceLink[];
  isPlanned: boolean;
}

export const comparisonCheckedOn = '16. November 2026';

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
        note: 'Gmail, iCloud, GMX, WEB.DE, T-Online und viele andere. Konten von Microsoft gehen noch nicht, siehe weiter unten.',
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
        verdict: 'no',
        note: 'Du siehst neue Mails, wenn du die App öffnest. Warum, steht weiter unten.',
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
];

export const limitations: Limitation[] = [
  {
    title: 'Kein Hinweis, wenn eine neue Mail kommt',
    shortAnswer: 'MailSimple meldet sich nicht von selbst. Du siehst neue Mails, sobald du die App öffnest.',
    reason:
      'Stell dir einen Pförtner vor, der Tag und Nacht an deinem Briefkasten steht. Kommt Post, klingelt er bei dir. Dafür braucht er aber deinen Briefkastenschlüssel. So machen es manche Apps, Spark zum Beispiel: Ein Computer der Firma schaut für dich in dein Postfach. MailSimple hat absichtlich keinen solchen Pförtner. Und ist die App zu, entscheidet das iPhone, wann sie kurz nachschauen darf.',
    sources: [
      sparkPrivacy,
      {
        label: 'Apple-Entwicklerdokumentation',
        url: 'https://developer.apple.com/documentation/backgroundtasks/choosing-background-strategies-for-your-app',
      },
    ],
    isPlanned: true,
  },
  {
    title: 'Noch keine Suche',
    shortAnswer: 'Du kannst deine Mails noch nicht durchsuchen.',
    reason: 'Zum Suchen müssen die Mails auf dem iPhone gespeichert sein. Das kann MailSimple noch nicht.',
    sources: [],
    isPlanned: true,
  },
  {
    title: 'Ohne Internet keine Mails',
    shortAnswer: 'Ohne Internet zeigt MailSimple keine Mails an.',
    reason: 'MailSimple holt deine Mails jedes Mal frisch von deinem Anbieter und speichert sie noch nicht auf dem iPhone.',
    sources: [],
    isPlanned: true,
  },
  {
    title: 'Keine Konten von Microsoft',
    shortAnswer: 'Adressen von Outlook.com, Hotmail oder Live funktionieren nicht.',
    reason:
      'Microsoft verlangt seit September 2024 eine andere Art der Anmeldung. Die kann MailSimple noch nicht. Gmail und iCloud gehen. Dort brauchst du aber ein zweites Passwort, das du bei Google oder Apple extra erzeugst. Wie das geht, steht auf der Support-Seite.',
    sources: [
      {
        label: 'Microsoft-Ankündigung',
        url: 'https://techcommunity.microsoft.com/blog/outlook/keeping-our-outlook-personal-email-users-safe-reinforcing-our-commitment-to-secu/4164184',
      },
    ],
    isPlanned: false,
  },
  {
    title: 'Schreiben ohne Fett, Farben und Bilder',
    shortAnswer: 'Du schreibst einfachen Text. Auch Weiterleiten gibt es bisher nicht.',
    reason: 'Wir halten die erste Version bewusst klein, damit sie zuverlässig läuft.',
    sources: [],
    isPlanned: false,
  },
];
