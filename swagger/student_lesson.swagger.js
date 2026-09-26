/**
 * @swagger
 * tags:
 *   name: StudentLesson
 *   description: StudentLessonlarni boshqarish
 */

/**
 * @swagger
 * /student_lesson/register:
 *   post:
 *     summary: Yangi StudentLesson qo'shish
 *     tags: [StudentLesson]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               lesson_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *               is_there:
 *                 type: boolean
 *               reason:
 *                 type: string
 *               has_paid:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: StudentLesson muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
studentLessonRouter.post("/register", validateSchema(registerStudentLessonValidationSchema), studentLessonRegister);

/**
 * @swagger
 * /student_lesson/get:
 *   get:
 *     summary: Barcha StudentLessonlarni olish
 *     tags: [StudentLesson]
 *     responses:
 *       '200':
 *         description: StudentLessonlar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
studentLessonRouter.get("/get", getStudentLessons);

/**
 * @swagger
 * /student_lesson/get/{id}:
 *   get:
 *     summary: StudentLessonni ID bo'yicha olish
 *     tags: [StudentLesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: StudentLesson topildi
 *       '404':
 *         description: StudentLesson topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentLessonRouter.get("/get/:id", getStudentLessonById);

/**
 * @swagger
 * /student_lesson/update/{id}:
 *   put:
 *     summary: StudentLessonni yangilash
 *     tags: [StudentLesson]
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
 *               lesson_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *               is_there:
 *                 type: boolean
 *               reason:
 *                 type: string
 *               has_paid:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: StudentLesson yangilandi
 *       '404':
 *         description: StudentLesson topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentLessonRouter.put("/update/:id", validateSchema(updateStudentLessonValidationSchema), updateStudentLesson);

/**
 * @swagger
 * /student_lesson/delete/{id}:
 *   delete:
 *     summary: StudentLessonni o'chirish
 *     tags: [StudentLesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: StudentLesson o'chirildi
 *       '404':
 *         description: StudentLesson topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentLessonRouter.delete("/delete/:id", deleteStudentLesson);

/**
 * @swagger
 * /student_lesson/search:
 *   get:
 *     summary: StudentLessonlarni qidirish
 *     tags: [StudentLesson]
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
studentLessonRouter.get("/search", searchStudentLesson);

