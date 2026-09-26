/**
 * @swagger
 * tags:
 *   name: StudentGroup
 *   description: StudentGrouplarni boshqarish
 */

/**
 * @swagger
 * /student_group/register:
 *   post:
 *     summary: Yangi StudentGroup qo'shish
 *     tags: [StudentGroup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *               group_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: StudentGroup muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
studentGroupRouter.post("/register", validateSchema(registerStudentGroupValidationSchema), studentGroupRegister);

/**
 * @swagger
 * /student_group/get:
 *   get:
 *     summary: Barcha StudentGrouplarni olish
 *     tags: [StudentGroup]
 *     responses:
 *       '200':
 *         description: StudentGrouplar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
studentGroupRouter.get("/get", getStudentGroups);

/**
 * @swagger
 * /student_group/get/{id}:
 *   get:
 *     summary: StudentGroupni ID bo'yicha olish
 *     tags: [StudentGroup]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: StudentGroup topildi
 *       '404':
 *         description: StudentGroup topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentGroupRouter.get("/get/:id", getStudentGroupById);

/**
 * @swagger
 * /student_group/update/{id}:
 *   put:
 *     summary: StudentGroupni yangilash
 *     tags: [StudentGroup]
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
 *               student_id:
 *                 type: integer
 *               group_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: StudentGroup yangilandi
 *       '404':
 *         description: StudentGroup topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentGroupRouter.put("/update/:id", validateSchema(updateStudentGroupValidationSchema), updateStudentGroup);

/**
 * @swagger
 * /student_group/delete/{id}:
 *   delete:
 *     summary: StudentGroupni o'chirish
 *     tags: [StudentGroup]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: StudentGroup o'chirildi
 *       '404':
 *         description: StudentGroup topilmadi
 *       '500':
 *         description: Server xatosi
 */
studentGroupRouter.delete("/delete/:id", deleteStudentGroup);

