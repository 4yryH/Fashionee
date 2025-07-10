import promoCodeList from '../data/promoCode.json';

export function getDiscountForCode(code) {
  const enteredCode = code.trim().toLowerCase();

  const findCode = promoCodeList.promoCode.find(
    (code) => Object.keys(code)[0].toLowerCase() === enteredCode
  );

  return findCode ? Object.values(findCode)[0] : null;
}
