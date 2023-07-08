export const portfolioErrorMessage = `The call to get the portfolio has failed`;

export const portfolioHappyPath = [
  {
    id: 16,
    name: `NRMA`,
    story: `This was a cool project`,
    link: ``,
    image: `xxxxxxx.png`,
  },
];

export const error = {
  type: `failure`,
  error: new Error(portfolioErrorMessage),
};
