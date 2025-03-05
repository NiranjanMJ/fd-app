interface MenuItem {
    id: string;
    veg: boolean;
    name: string;
    image: string;
    price: string;
    rating: string;
    ratings: string;
    quantity: string;
    bestSeller: boolean;
    description: string;
  }
  
  interface Hotel {
    id: number;
    created_at: string;
    name: string;
    featured_image: string;
    cuisines: string;
    aggregate_rating: string;
    address: string;
    smalladdress: string;
    offer: string;
    no_of_Delivery: number;
    latitude: number;
    longitude: number;
    time: string;
    items: MenuItem[];
  }
  