
const constants = {
    EMPTY_STRING: '',
    DEFAULT_PHONE: '_ _ _ - _ _ _ - _ _ _ _',
    DEFAULT_SSN: '_ _ _ - _ _ - _ _ _ _',
    ONLY_DIGITS: /[^\d]/g,
    PHONE_NUMBER_LENGTH: 10,
    PHONE_HYPHEN_FIRST_POS: 3,
    PHONE_HYPHEN_SECOND_POS: 6,
    NO_VISIBLE_HYPHEN: Infinity,
    HYPHEN: '-',
    SSN_LENGTH: 9,
    PHONE_MAX_LENGTH: 12, // Adjusted to account for '-' characters
    SSN_MAX_LENGTH: 11, // Adjusted to account for '-' characters
    CREDIT_CARD_IMAGE_PORTION : 0.25

}

export default constants;