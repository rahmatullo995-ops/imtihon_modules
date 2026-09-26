/**
 * @swagger
 * tags:
 *   name: Lesson
 *   description: Lessonlarni boshqarish
 */

/**
 * @swagger
 * /lesson/register:
 *   post:
 *     summary: Yangi Lesson qo'shish
 *     tags: [Lesson]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               lesson_theme:
 *                 type: string
 *               lesson_number:
 *                 type: integer
 *               group_id:
 *                 type: integer
 *               lesson_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '201':
 *         description: Lesson muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
lessonRouter.post("/register", validateSchema(registerLessonValidationSchema), lessonRegister);

/**
 * @swagger
 * /lesson/get:
 *   get:
 *     summary: Barcha Lessonlarni olish
 *     tags: [Lesson]
 *     responses:
 *       '200':
 *         description: Lessonlar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
lessonRouter.get("/get", getLessons);

/**
 * @swagger
 * /lesson/get/{id}:
 *   get:
 *     summary: Lessonni ID bo'yicha olish
 *     tags: [Lesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lesson topildi
 *       '404':
 *         description: Lesson topilmadi
 *       '500':
 *         description: Server xatosi
 */
lessonRouter.get("/get/:id", getLessonById);

/**
 * @swagger
 * /lesson/update/{id}:
 *   put:
 *     summary: Lessonni yangilash
 *     tags: [Lesson]
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
 *               lesson_theme:
 *                 type: string
 *               lesson_number:
 *                 type: integer
 *               group_id:
 *                 type: integer
 *               lesson_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '200':
 *         description: Lesson yangilandi
 *       '404':
 *         description: Lesson topilmadi
 *       '500':
 *         description: Server xatosi
 */
lessonRouter.put("/update/:id", validateSchema(updateLessonValidationSchema), updateLesson);

/**
 * @swagger
 * /lesson/delete/{id}:
 *   delete:
 *     summary: Lessonni o'chirish
 *     tags: [Lesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lesson o'chirildi
 *       '404':
 *         description: Lesson topilmadi
 *       '500':
 *         description: Server xatosi
 */
lessonRouter.delete("/delete/:id", deleteLesson);

/**
 * @swagger
 * /lesson/search:
 *   get:
 *     summary: Lessonlarni qidirish
 *     tags: [Lesson]
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
lessonRouter.get("/search", searchLesson);

