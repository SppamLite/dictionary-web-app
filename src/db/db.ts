import Dexie, { Table } from 'dexie'
import { WordDef } from '../types/word-def.type'

export class SubClassedDexie extends Dexie {
  words!: Table<WordDef>

  constructor() {
    super('words')
    this.version(1).stores({
      words: '++id, word', // Primary key and indexed props
    })
  }
}

export const db = new SubClassedDexie()
