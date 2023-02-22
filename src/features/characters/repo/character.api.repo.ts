import { CharacterStructure } from "../../models/characters";

export interface CharacterApiRepoStructure {
  loadTasks(): Promise<CharacterStructure[]>;
  update(character: Partial<CharacterStructure>): Promise<CharacterStructure>;
}

export class GotApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4200";
  }

  async loadCharacters(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }

  async update(
    character: Partial<CharacterStructure>
  ): Promise<CharacterStructure> {
    const url = this.url + "/" + character.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure;
    return data;
  }
}
