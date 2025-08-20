import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CryptoDetailResponse, CryptosResponse } from "./cryptoApiTypes";

const cryptoApiHeaders = {
  "x-rapidapi-key": "8c03474fa0mshbf54bd2b078d89ap1833fbjsn80ec6faeee5a",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoapi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => {
    return {
      getCryptos: builder.query<CryptosResponse, void>({
        query: () => createRequest("/coins"),
      }),
      getCryptoDetails: builder.query<CryptoDetailResponse, string | undefined>(
        {
          query: (id) => createRequest(`/coin/${id}`),
        }
      ),
    };
  },
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
