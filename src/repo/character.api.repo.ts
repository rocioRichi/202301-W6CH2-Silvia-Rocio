import { CharacterStructure } from "../features/characters/models/character";

export class CharacterApiRepo {
  static loadCharacter() {
    throw new Error("Method not implemented.");
  }
  url: string;
  constructor() {
    this.url = "http://localhost:5080/characters";
  }

  async loadCharacter(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }
}
