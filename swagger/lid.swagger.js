/**
 * @swagger
 * tags:
 *   name: Lid
 *   description: Lidlarni boshqarish
 */

/**
 * @swagger
 * /lid/register:
 *   post:
 *     summary: Yangi Lid qo'shish
 *     tags: [Lid]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               lid_stage_id:
 *                 type: integer
 *               test_date:
 *                 type: string
 *                 format: date
 *               trial_lesson_date:
 *                 type: integer
 *               trial_lesson_time:
 *                 type: string
 *               trial_lesson_group_id:
 *                 type: integer
 *               lid_status_id:
 *                 type: integer
 *               cancel_reason_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Lid muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
lidRouter.post("/register", validateSchema(registerLidValidationSchema), lidRegister);

/**
 * @swagger
 * /lid/get:
 *   get:
 *     summary: Barcha Lidlarni olish
 *     tags: [Lid]
 *     responses:
 *       '200':
 *         description: Lidlar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
lidRouter.get("/get", getLids);

/**
 * @swagger
 * /lid/get/{id}:
 *   get:
 *     summary: Lidni ID bo'yicha olish
 *     tags: [Lid]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lid topildi
 *       '404':
 *         description: Lid topilmadi
 *       '500':
 *         description: Server xatosi
 */
lidRouter.get("/get/:id", getLidById);

/**
 * @swagger
 * /lid/update/{id}:
 *   put:
 *     summary: Lidni yangilash
 *     tags: [Lid]
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
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               lid_stage_id:
 *                 type: integer
 *               test_date:
 *                 type: string
 *                 format: date
 *               trial_lesson_date:
 *                 type: integer
 *               trial_lesson_time:
 *                 type: string
 *               trial_lesson_group_id:
 *                 type: integer
 *               lid_status_id:
 *                 type: integer
 *               cancel_reason_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Lid yangilandi
 *       '404':
 *         description: Lid topilmadi
 *       '500':
 *         description: Server xatosi
 */
lidRouter.put("/update/:id", validateSchema(updateLidValidationSchema), updateLid);

/**
 * @swagger
 * /lid/delete/{id}:
 *   delete:
 *     summary: Lidni o'chirish
 *     tags: [Lid]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lid o'chirildi
 *       '404':
 *         description: Lid topilmadi
 *       '500':
 *         description: Server xatosi
 */
lidRouter.delete("/delete/:id", deleteLid);

/**
 * @swagger
 * /lid/search:
 *   get:
 *     summary: Lidlarni qidirish
 *     tags: [Lid]
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
lidRouter.get("/search", searchLid);

