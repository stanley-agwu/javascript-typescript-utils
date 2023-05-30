import { useEffect, useState } from 'react';

import { CustomersForecastsRequest, ErrorType } from '@some-hypotetical-fetch-api-spec';
import { getCustomersAccessForecasts } from 'services/api.ts';

const useCustomersForecasts = (request: CustomersForecastsRequest, token: string) => {
  const [customersFutureForecasts, setCustomersFutureForecasts] = useState<string[]>([]);
  const [errorState, setErrorState] = useState<ErrorType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCustomersAccessForecasts(request, token)
        if (response) {
          setCustomersFutureForecasts(response);
        }
      } catch (error) {
        setErrorState(error.message)
      }
    })();
  })

  return { customersFutureForecasts, errorState }
};

export default useCustomersForecasts;
