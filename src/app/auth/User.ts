export class User {
  first_name : string;
  last_name : string;
  password : string;
  email: string;
  isAdmin: boolean;
  id : number;
  constructor(first_name, last_name, password, email, isAdmin, id) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.password = password;
    this.email = email;
    this.isAdmin = isAdmin;
    this.id = id;
  }
}
