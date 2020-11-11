//Required optional because User is potentially an emtpy object if not signed in

export interface User {
  email?: string, 
  email_verified?: boolean, 
  name?: string, 
  nickname?: string, 
  picture?: string, 
  sub?: string, 
  updated_at?: string
}