export class User {
  constructor(  
    public readonly id: string,
    public name: string,
    public email: string,
    public avatar_url: string,
    public password?: string | null,
  ) {
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email");
    }
  }

  private isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
}