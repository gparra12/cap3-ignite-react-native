export interface Car {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  carImage: string;
  acessories: { type: string; name: string }[];
  photos: string[];
}
