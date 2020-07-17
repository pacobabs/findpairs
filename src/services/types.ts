export type CountryResults = {
  Results: Country[]
}

export type Country = {
  IdCountry: string
  Name: Name[]
}

export type ConfederationResults = {
  Results: Confederation[]
}

export type Confederation = {
  IdConfederation: string
  Name: Name[]
}

export type CompetitionResults = {
  Results: Competition[]
}

export type Competition = {
  IdCompetition: string
  Name: Name[]
}

export type LiveResults = {
  Results: LiveMatch[]
}

type LiveMatch = {
  IdMatch: string
  HomeTeam: Team
  AwayTeam: Team
}

export type MatchResults = {
  Results: Match[]
}

export type Match = {
  IdMatch: string
  Home: Team
  Away: Team
}

type Team = {
  TeamName: Name[]
}

type Name = {
  Description: string
}
