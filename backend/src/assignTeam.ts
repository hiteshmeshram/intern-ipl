
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

interface Team {
    color: string,
    team: IplTeams
}

const teams: Team[] = [
    {color: 'BLUE',
     team: IplTeams.MUMBAI_INDIANS
    },
    {color: 'RED',
        team:IplTeams.ROYAL_CHALLENGERS_BANGALORE
    },
    {color: 'YELLOW',
        team: IplTeams.CHENNAI_SUPER_KINGS
    },
    {color: 'ORANGE',
        team: IplTeams.HYDERABAD
    },
    {color: 'PURPLE',
        team: IplTeams.KOLKATA_KINGHT_RIDERS
    },
    {color: 'VIOLET',
        team: IplTeams.LUCKNOW_SUPER_GIANTS
    }
    
]

export const assignTeam = (color: string) => {
    const res: Team[] = teams.filter(team => team.color === color);
    return res[0].team;
}