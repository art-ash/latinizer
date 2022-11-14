import czechifyUk from './czechify_uk';
import polonifyUk from './polonify_uk';
import englifyUk from './englify_uk';
import englifyRu from './englify_ru';

export default (text: string, inputType: string, outputType: string): string => {
  if (inputType === 'uk') {
    switch (outputType) {
      case 'cz':
        return czechifyUk(text);
      case 'pl':
        return polonifyUk(text);
      case 'en':
        return englifyUk(text);
    }    
  }

  if (inputType === 'ru') {
    return englifyRu(text);
  }
  
  return englifyUk(text);
}