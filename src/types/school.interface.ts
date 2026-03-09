export interface ISchool {
  id: number;
  name: string;
  nickname: string;
  logo: string;
  type: string;
  totalProviders: number;
  totalPartners: number;
  campuses: string[] | null;
  createdAt: string;
}
