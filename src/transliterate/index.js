// import polonify from './polonify';
import czechify from './czechify';
import englify from './englify';

export default (text, inputType, outputType) => {
  switch (outputType) {
    // case 'pl':
    //   return polonify(text);
    case 'cz':
      return czechify(text);
    case 'en':
      return englify(text);
  }
}