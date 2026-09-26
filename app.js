const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const ConnectionToDB = async () => {
  try {
    await connect(process.env.MONGO_URL || "");

    console.log("MongoDB ulandi va ishlash uchun tayyor🚨");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

ConnectionToDB();

const { stageRouter } = require("./routes/stage.routes");
app.use("/stage", stageRouter);

const { roleRouter } = require("./routes/role.routes");
app.use("/role", roleRouter);

const { lidStatusRouter } = require("./routes/lid_status.routes");
app.use("/lid-status", lidStatusRouter);

const { reasonRouter } = require("./routes/reason.routes");
app.use("/reason", reasonRouter);

const { branchRouter } = require("./routes/branch.routes");
app.use("/branch", branchRouter);

const { staffRouter } = require("./routes/staff.routes");
app.use("/staff", staffRouter);

const { groupStaffRouter } = require("./routes/group_staff.routes");
app.use("/group-staff", groupStaffRouter);

const { stuffRoleRouter } = require("./routes/stuff_role.routes");
app.use("/stuff-role", stuffRoleRouter);

const { groupRouter } = require("./routes/group.routes");
app.use("/group", groupRouter);

const { lidRouter } = require("./routes/lid.routes");
app.use("/lid", lidRouter);

const { paymentRouter } = require("./routes/payment.routes");
app.use("/payment", paymentRouter);

const { studentRouter } = require("./routes/students.routes");
app.use("/students", studentRouter);

const { studentGroupRouter } = require("./routes/student_group.routes");
app.use("/student-group", studentGroupRouter);

const { lessonRouter } = require("./routes/lesson.routes");
app.use("/lesson", lessonRouter);

const { studentLessonRouter } = require("./routes/student_lesson.routes");
app.use("/student-lesson", studentLessonRouter);

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const SwaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",

    info: {
      title: "IMTIHON MODELLARI API",
      version: "1.0.0",
      description: "API documentation using Swagger"
    },

    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },

  apis: ["./swagger/*.js"]
};

const swaggerDocs = swaggerJsDoc(SwaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});