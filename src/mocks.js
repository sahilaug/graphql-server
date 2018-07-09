import casual from 'casual';

const mocks = {
  String: () => casual.string(),
  Int: () => casual.integer(),
};

export default mocks;
