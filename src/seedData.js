// src/seedData.js
const connectDB = require('./db');

const seedData = async () => {
  const db = await connectDB();

  // Academic Records Collection
  await db.collection('academicRecords').insertOne({
    "studentID": "1001",
    "name": "John Doe",
    "grades": {
      "math": "A",
      "science": "B",
      "history": "A"
    }
  });

  // Co-curricular Activities Collection
  await db.collection('coCurricularActivities').insertOne({
    "studentID": "1001",
    "name": "John Doe",
    "activityType": "Sports",
    "duration": "1 year",
    "achievements": "Team Captain"
  });

  console.log('Sample data seeded successfully');
};

seedData();
