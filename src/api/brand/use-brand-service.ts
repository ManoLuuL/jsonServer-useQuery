import axios from "axios";
import { useCallback } from "react";
import { BASE_URL } from "../axios/consts";
import { BrandType } from "./types";

export const useBrandService = () => {
  const { get, post } = axios;

  const getAllBrands = useCallback(
    async () => (await get<BrandType[]>(`${BASE_URL}/brand`)).data,
    [get]
  );

  const addBrand = useCallback(
    async (data: BrandType) => (await post(`${BASE_URL}/brand`, data)).data,
    [post]
  );

  return {
    getAllBrands,
    addBrand,
  };
};
