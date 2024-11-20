export interface APIResponse {
   items: Characters[];
   meta: Meta;
   links: Links;
}

export interface APIResponsePlanets extends APIResponse {
   items: OriginPlanet[];
}

export interface Characters {
   id: number;
   name: string;
   ki: string;
   maxKi: string;
   race: Race;
   gender: Gender;
   description: string;
   image: string;
   affiliation: Affiliation;
   deletedAt: null;
}
type Race =
   | 'Saiyan'
   | 'Namekian'
   | 'Human'
   | 'Frieza Race'
   | 'Android'
   | 'Majin'
   | 'God'
   | 'Jiren Race'
   | 'Mestizo Saiyajin-Humano'
   | 'Nucleico benigno'
   | 'Evil'
   | 'Nucleico';
export type Affiliation = 'Army of Frieza' | 'Freelancer' | 'Z Fighter';
export type Gender = 'Female' | 'Male';

export interface Links {
   first: string;
   previous: string;
   next: string;
   last: string;
}

export interface Meta {
   totalItems: number;
   itemCount: number;
   itemsPerPage: number;
   totalPages: number;
   currentPage: number;
}

export interface SingleCharacter extends Characters {
   originPlanet: OriginPlanet;
   transformations: Transformation[] | [];
}

export interface OriginPlanet {
   id: number;
   name: string;
   isDestroyed: boolean;
   description: string;
   image: string;
   deletedAt: null;
}

export interface Transformation {
   id: number;
   name: string;
   image: string;
   ki: string;
   deletedAt: null;
}
