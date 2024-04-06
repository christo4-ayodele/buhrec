import { Schema, Document, model, models } from 'mongoose';

export interface IPaper extends Document {
  _id: string;
  title: string;
  program: string;
  writer: { _id: string; firstName: string; lastName: string }; // Use Types.ObjectId if not importing the IUser interface
}

const ResearchPaperSchema = new Schema({
  title: { type: String },
  paperUrl: { type: String },
  program: {
    type: String,
    enum: {
      values: ['Undergraduate', 'Postgraduate'],
    },
  },
  writer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const ResearchPaper =
  models.ResearchPaper || model('ResearchPaper', ResearchPaperSchema);

export default ResearchPaper;
