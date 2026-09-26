/**
 * @swagger
 * tags:
 *   name: Reason
 *   description: Reasonlarni boshqarish
 */

/**
 * @swagger
 * /reason/register:
 *   post:
 *     summary: Yangi Reason qo'shish
 *     tags: [Reason]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               reason_id:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Reason muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
reasonRouter.post("/register", validateSchema(registerReasonValidationSchema), reasonRegister);

/**
 * @swagger
 * /reason/get:
 *   get:
 *     summary: Barcha Reasonlarni olish
 *     tags: [Reason]
 *     responses:
 *       '200':
 *         description: Reasonlar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
reasonRouter.get("/get", getReasons);

/**
 * @swagger
 * /reason/get/{id}:
 *   get:
 *     summary: Reasonni ID bo'yicha olish
 *     tags: [Reason]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Reason topildi
 *       '404':
 *         description: Reason topilmadi
 *       '500':
 *         description: Server xatosi
 */
reasonRouter.get("/get/:id", getReasonById);

/**
 * @swagger
 * /reason/update/{id}:
 *   put:
 *     summary: Reasonni yangilash
 *     tags: [Reason]
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
 *               reason_id:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Reason yangilandi
 *       '404':
 *         description: Reason topilmadi
 *       '500':
 *         description: Server xatosi
 */
reasonRouter.put("/update/:id", validateSchema(updateReasonValidationSchema), updateReason);

/**
 * @swagger
 * /reason/delete/{id}:
 *   delete:
 *     summary: Reasonni o'chirish
 *     tags: [Reason]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Reason o'chirildi
 *       '404':
 *         description: Reason topilmadi
 *       '500':
 *         description: Server xatosi
 */
reasonRouter.delete("/delete/:id", deleteReason);

/**
 * @swagger
 * /reason/search:
 *   get:
 *     summary: Reasonlarni qidirish
 *     tags: [Reason]
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
reasonRouter.get("/search", searchReason);

