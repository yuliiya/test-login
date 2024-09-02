import { oneLetter, oneLowercase, oneNumber, oneSpecialChar, oneUppercase } from './regExpPatterns.ts';

export const MIN_PASSWORD_LENGTH = 8;

enum RuleTypes {
  MIN_LENGTH = 'minLength',
  UPPER_AND_LOWER = 'upperAndLower',
  HAS_SPECIAL_CHAR = 'hasSpecialChar',
  LETTERS_AND_NUMBERS = 'lettersAndNumbers',
}

function hasUpperAndLowerCase(text: string) {
  const upper = oneUppercase.test(text);
  const lower = oneLowercase.test(text);

  return upper && lower;
}

function hasLettersAndNumbers(text: string) {
  const number = oneNumber.test(text);
  const letter = oneLetter.test(text);

  return number && letter;
}

function hasSpecCharacter(text: string) {
  return oneSpecialChar.test(text);
}

export const validatePassword = {
  [RuleTypes.HAS_SPECIAL_CHAR]: hasSpecCharacter,
  [RuleTypes.UPPER_AND_LOWER]: hasUpperAndLowerCase,
  [RuleTypes.LETTERS_AND_NUMBERS]: hasLettersAndNumbers,
};

export const passwordValidationRules: Record<RuleTypes, string> = {
  [RuleTypes.MIN_LENGTH]: `At least ${MIN_PASSWORD_LENGTH} characters`,
  [RuleTypes.UPPER_AND_LOWER]: 'A mixture of both uppercase and lowercase letters',
  [RuleTypes.LETTERS_AND_NUMBERS]: 'A mixture of letters and numbers',
  [RuleTypes.HAS_SPECIAL_CHAR]: 'Inclusion of at least one special character, e.g., ! @ # ? ]',
};
