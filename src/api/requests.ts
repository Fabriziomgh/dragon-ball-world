import { APIResponse, APIResponsePlanets, SingleCharacter } from '@/types';
import axios from 'axios';

const APIDragonBall = axios.create({
   baseURL: 'https://dragonball-api.com/api',
   timeout: 3000,
});

export const getAllCharacters = async (): Promise<APIResponse> => {
   try {
      const { data, status } = await APIDragonBall.get<APIResponse>(
         '/characters?limit=58'
      );

      if (status !== 200) {
         throw new Error('Ha ocurrido algún error');
      }
      return data;
   } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
   }
};
export const getSingleCharacter = async (
   id: string
): Promise<SingleCharacter> => {
   try {
      const { data, status } = await APIDragonBall.get<SingleCharacter>(
         `/characters/${id}`
      );

      if (status !== 200) {
         throw new Error('Ha ocurrido algún error');
      }
      return data;
   } catch (error) {
      console.error('Error fetching characters:', error);

      throw error;
   }
};
export const GetAllPlanets = async (): Promise<APIResponsePlanets> => {
   try {
      const { data, status } = await APIDragonBall.get<APIResponsePlanets>(
         '/planets?limit=20'
      );

      if (status !== 200) {
         throw new Error('Ha ocurrido algún error');
      }
      return data;
   } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
   }
};
