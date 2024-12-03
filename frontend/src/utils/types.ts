
export interface User {
    name: string,
    email: string,
    color: string,
    team: IplTeams,
    role: 'ADMIN' | 'USER'
}

enum IplTeams {
    MUMBAI_INDIANS = "MUMBAI_INDIANS", 
    DELHI_CAPITALS = "DELHI_CAPITALS",
    ROYAL_CHALLENGERS_BANGALORE = "ROYAL_CHALLENGERS_BANGALORE",
    CHENNAI_SUPER_KINGS = 'CHENNAI_SUPER_KINGS',
    RAJASTHAN_ROYALS = 'RAJASTHAN_ROYALS',
    HYDERABAD = 'HYDERABAD',
    KOLKATA_KINGHT_RIDERS = 'KOLKATA_KINGHT_RIDERS',
    LUCKNOW_SUPER_GIANTS = 'LUCKNOW_SUPER_GIANTS',
  }

  export interface Product {
    name: string,
    description: string,
    image_url: string,
    price: string,
    team: IplTeams,
    id: number
  }