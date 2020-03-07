export class User {
    constructor(
        public name: string,
        public lastname: string,
        public phone: number,
        public bornDate: string,
        public password: string,
        public confirmPassword: string
    ) {}
}