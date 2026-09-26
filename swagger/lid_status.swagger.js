/**
 * @swagger
 * tags:
 *   name: LidStatus
 *   description: LidStatuslarni boshqarish
 */

/**
 * @swagger
 * /lid_status/register:
 *   post:
 *     summary: Yangi LidStatus qo'shish
 *     tags: [LidStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               status:
 *                 type: string
 *     responses:
 *       '201':
 *         description: LidStatus muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
lidStatusRouter.post("/register", validateSchema(registerLidStatusValidationSchema), lidStatusRegister);

/**
 * @swagger
 * /lid_status/get:
 *   get:
 *     summary: Barcha LidStatuslarni olish
 *     tags: [LidStatus]
 *     responses:
 *       '200':
 *         description: LidStatuslar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
lidStatusRouter.get("/get", getLidStatuss);

/**
 * @swagger
 * /lid_status/get/{id}:
 *   get:
 *     summary: LidStatusni ID bo'yicha olish
 *     tags: [LidStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: LidStatus topildi
 *       '404':
 *         description: LidStatus topilmadi
 *       '500':
 *         description: Server xatosi
 */
lidStatusRouter.get("/get/:id", getLidStatusById);

/**
 * @swagger
 * /lid_status/update/{id}:
 *   put:
 *     summary: LidStatusni yangilash
 *     tags: [LidStatus]
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
 *               status:
 *                 type: string
 *     responses:
 *       '200':
 *         description: LidStatus yangilandi
 *       '404':
 *         description: LidStatus topilmadi
 *       '500':
 *         description: Server xatosi
 */
lidStatusRouter.put("/update/:id", validateSchema(updateLidStatusValidationSchema), updateLidStatus);

/**
 * @swagger
 * /lid_status/delete/{id}:
 *   delete:
 *     summary: LidStatusni o'chirish
 *     tags: [LidStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: LidStatus o'chirildi
 *       '404':
 *         description: LidStatus topilmadi
 *       '500':
 *         description: Server xatosi
 */
lidStatusRouter.delete("/delete/:id", deleteLidStatus);

/**
 * @swagger
 * /lid_status/search:
 *   get:
 *     summary: LidStatuslarni qidirish
 *     tags: [LidStatus]
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
lidStatusRouter.get("/search", searchLidStatus);

