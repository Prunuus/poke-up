import mongoose, { Schema, Document } from "mongoose";

const userMonSchema: Schema<IUserMon> = new mongoose.Schema({
  name: String,
  type: [String],
  moves: [String],
  ability: String,
  stats: {
    Atk: Number,
    SpA: Number,
    Def: Number,
    SpD: Number,
    Spe: Number,
    HP: Number,
  },
  EVs: {
    Atk: Number,
    SpA: Number,
    Def: Number,
    SpD: Number,
    Spe: Number,
    HP: Number,
  },
  IVs: {
    Atk: Number,
    SpA: Number,
    Def: Number,
    SpD: Number,
    Spe: Number,
    HP: Number,
  },
  nature: String,
  exp: Number,
  level: Number,
  growthRate: String,
  item: String,
  sprite: {
    backDefault: String,
    frontDefault: String,
  },
  form: String,
});

export default userMonSchema;

export interface IUserMon extends Document {
  name: string;
  type: string[];
  moves: string[];
  ability: string;
  stats: {
    Atk: number;
    SpA: number;
    Def: number;
    SpD: number;
    Spe: number;
    HP: number;
  };
  EVs: {
    Atk: number;
    SpA: number;
    Def: number;
    SpD: number;
    Spe: number;
    HP: number;
  };
  IVs: {
    Atk: number;
    SpA: number;
    Def: number;
    SpD: number;
    Spe: number;
    HP: number;
  };
  nature: string;
  exp: number;
  level: number;
  growthRate: string;
  item: string;
  sprite: {
    backDefault: string;
    frontDefault: string;
  };
  form: string;
}
