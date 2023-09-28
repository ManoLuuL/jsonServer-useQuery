import axios from "axios";
import { useCallback } from "react";
import { BASE_URL } from "../axios/consts";
import { BrandType } from "./types";

export const useBrandService = () => {
  const { get, post, put, delete: remove } = axios;

  const getAllBrands = useCallback(
    async () => (await get<BrandType[]>(`${BASE_URL}/brand`)).data,
    [get]
  );

  const addBrand = useCallback(
    async (data: BrandType) => (await post(`${BASE_URL}/brand`, data)).data,
    [post]
  );

  const editBrand = useCallback(
    async (data: BrandType, id: number) =>
      (await put(`${BASE_URL}/brand/${id}`, data)).data,
    [put]
  );

  const deleteBrand = useCallback(
    async (id: number) => (await remove(`${BASE_URL}/brand/${id}`)).data,
    [remove]
  );

  return {
    getAllBrands,
    addBrand,
    editBrand,
    deleteBrand,
  };
};
