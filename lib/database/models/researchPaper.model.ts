import { Schema, Document, model, models } from 'mongoose';

const ResearchPaperSchema = new Schema({
  title: {},
  paperUrl: {},
  program: { enum: ['Undergraduate', 'Postgraduate'] },
  writer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const ResearchPaper =
  models.ResearchPaper || model('ResearchPaper', ResearchPaperSchema);

export default ResearchPaper;
