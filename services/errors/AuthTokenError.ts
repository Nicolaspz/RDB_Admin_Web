export class AuthTokenError extends Error{
  constructor(){
    super('error with authrntication token')
  }
}