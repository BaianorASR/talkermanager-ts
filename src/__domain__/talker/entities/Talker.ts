export interface ITalker {
  name: string;
  age: number;
  id: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

export class Talker implements ITalker {
  public readonly name: string;
  public readonly age: number;
  public readonly id: number;
  public readonly talk: {
    watchedAt: string;
    rate: number;
  };

  constructor(data: ITalker) {
    this.name = data.name;
    this.age = data.age;
    this.id = data.id;
    this.talk = data.talk;
  }
}
