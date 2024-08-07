// __mocks__/react-navigation.js

const navigate = jest.fn();

module.exports = {
  useNavigation: () => ({
    navigate,
    goBack: jest.fn(),
    // Add other methods you may use
  }),
  useRoute: () => ({
    params: {}, // Mock route parameters if needed
  }),
};
