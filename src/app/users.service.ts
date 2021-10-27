import { Injectable } from '@angular/core';

export interface User {
    id: number;
    name: string;
    color: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {

    private db: User[] = [
        { id: 1, name: 'Alice', color: '#ff6666' },
        { id: 2, name: 'Bob', color: '#66ff66' },
        { id: 3, name: 'Cooper', color: '#6666ff' },
    ];

    public getUsers(): User[] {
        return this.db;
    }

    public getUsersCount(): number {
        return this.db.length;
    }

    public find(id: number): User {
        return this.db.find(user => user.id === id);
    }

}
