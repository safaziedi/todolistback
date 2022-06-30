import { Schema, Document } from 'mongoose';

export const TodoSchema = new Schema({
  description: { type: String},
  day: { type: String},
  reminder: { type: Boolean},
});

export interface Todo extends Document {
  _id: string;
  description: string;
  day: string;
  reminder :boolean;
}