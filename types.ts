
export interface Offer {
  id: number;
  title: string;
  description: string;
  points: number;
  icon: React.ReactNode;
}

export interface WithdrawalOption {
  id: string;
  name: string;
  logo: string;
  minPoints: number;
}
