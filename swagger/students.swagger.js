/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Studentslarni boshqarish
 */

/**
 * @swagger
 * /students/register:
 *   post:
 *     summary: Yangi Students qo'shish
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               lid_id:
 *                 type: integer
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Students muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
studentRouter.post("/register", validateSchema(registerStudentValidationSchema), studentRegister);

/**
 * @swagger
 * /students/get:
 *   get:
 *     summary: Barcha Studentslarni olish
 *     tags: [Students]
 *     responses:
 *       '200':
 *         description: Studentslar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
studentRouter.get("/get", getStudents);

/**
 * @swagger
 * /students/get/{id}:
 *   get:
 *     summary: Studentsni ID bo'yicha olish
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Students topildi
 *       '404':
 *         description: Students topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentRouter.get("/get/:id", getStudentById);

/**
 * @swagger
 * /students/update/{id}:
 *   put:
 *     summary: Studentsni yangilash
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               lid_id:
 *                 type: integer
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Students yangilandi
 *       '404':
 *         description: Students topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentRouter.put("/update/:id", validateSchema(updateStudentValidationSchema), updateStudent);

/**
 * @swagger
 * /students/delete/{id}:
 *   delete:
 *     summary: Studentsni o'chirish
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Students o'chirildi
 *       '404':
 *         description: Students topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentRouter.delete("/delete/:id", deleteStudent);

/**
 * @swagger
 * /students/search:
 *   get:
 *     summary: Studentslarni qidirish
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Qidiruv natijalari
 *       '400':
 *         description: Qidiruv so'zi kiritilmagan
 *       '500':
 *         description: Server xatosi
 */
studentRouter.get("/search", searchStudent);

