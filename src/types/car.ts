export interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  status: "Neuf" | "Occasion";
  specs: string;
  additionalSpecs: {
    label: string;
    value: string;
  }[];
  options: string[];
  description: string;
}