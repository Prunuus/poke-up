import mongoose from "mongoose";

const userMonSchema = new mongoose.Schema({
  Name: String,
  Type: [String],
  Moves: [String],
  Ability: String,
  Stats: {
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
  Nature: String,
  Exp: Number,
  Level: Number,
  GrowthRate: String,
  Item: String,
  Sprite: {
    BackDefault: String,
    FrontDefault: String,
  },
  Form: String,
});

export default userMonSchema;
