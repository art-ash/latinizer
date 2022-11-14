import { Language, Messages } from "./messages";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof Messages;
    }

    interface IntlConfig {
      locale: Language;
    }
  }
}
