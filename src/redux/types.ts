export interface Meeting {
  order: number;
  endAt: Date;
  startedAt: Date;
}

export interface Club {
  id: string;
  name: string;
  type: string;
  place: string;
  coverUrl: string;
  meetings: Meeting[];
  description: string;
}

export interface Leader {
  name: string;
}

export interface Partner {
  name: string;
}
export interface Products {
  club: Club;
  price: number;
  leaders: Leader[];
  partners: Partner[];
}

export interface InitialState {
  products: Products[];
  loading: boolean;
  query: string;
}
