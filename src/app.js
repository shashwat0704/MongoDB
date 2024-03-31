
const connectDB = require('./db');

const performCRUDOperations = async () => {
  const db = await connectDB();

  // Read Operations
  const academicRecords = await db.collection('academicRecords').find({ "studentID": "1001" }).toArray();
  console.log('Academic Records:', academicRecords);

  const coCurricularActivities = await db.collection('coCurricularActivities').find({ "studentID": "1001" }).toArray();
  console.log('Co-curricular Activities:', coCurricularActivities);

  // Create Operations
  await db.collection('academicRecords').insertOne({
    "studentID": "1002",
    "name": "Jane Doe",
    "grades": {
      "math": "B",
      "science": "A",
      "history": "A"
    }
  });

  await db.collection('coCurricularActivities').insertOne({
    "studentID": "1002",
    "name": "Jane Doe",
    "activityType": "Music",
    "duration": "2 years",
    "achievements": "Lead vocalist"
  });

  // // Update Operations
  // await db.collection('academicRecords').updateOne(
  //   { "studentID": "1001" },
  //   { $set: { "grades.math": "A+" } }
  // );

  // await db.collection('coCurricularActivities').updateOne(
  //   { "studentID": "1001" },
  //   { $set: { "achievements": "MVP" } }
  // );

  // Delete Operations
  // await db.collection('academicRecords').deleteOne({ "studentID": "1002" });
  // await db.collection('coCurricularActivities').deleteOne({ "studentID": "1002" });

  console.log('CRUD operations performed successfully');
};

performCRUDOperations();
