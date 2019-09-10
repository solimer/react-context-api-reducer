import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

const exchangeRatesQuery = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(exchangeRatesQuery);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error!!!</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>{currency}</p>
    </div>
  ));
};

export default ExchangeRates;
