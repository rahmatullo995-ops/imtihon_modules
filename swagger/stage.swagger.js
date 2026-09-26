/**
 * @swagger
 * tags:
 *   name: Stage
 *   description: Stagelarni boshqarish
 */

/**
 * @swagger
 * /stage/register:
 *   post:
 *     summary: Yangi Stage qo'shish
 *     tags: [Stage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Stage muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
stageRouter.post("/register", validateSchema(registerStageValidationSchema), stageRegister);

/**
 * @swagger
 * /stage/get:
 *   get:
 *     summary: Barcha Stagelarni olish
 *     tags: [Stage]
 *     responses:
 *       '200':
 *         description: Stagelar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
stageRouter.get("/get", getStages);

/**
 * @swagger
 * /stage/get/{id}:
 *   get:
 *     summary: Stageni ID bo'yicha olish
 *     tags: [Stage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Stage topildi
 *       '404':
 *         description: Stage topilmadi
 *       '500':
 *         description: Server xatosi
 */
stageRouter.get("/get/:id", getStageById);

/**
 * @swagger
 * /stage/update/{id}:
 *   put:
 *     summary: Stageni yangilash
 *     tags: [Stage]
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
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Stage yangilandi
 *       '404':
 *         description: Stage topilmadi
 *       '500':
 *         description: Server xatosi
 */
stageRouter.put("/update/:id", validateSchema(updateStageValidationSchema), updateStage);

/**
 * @swagger
 * /stage/delete/{id}:
 *   delete:
 *     summary: Stageni o'chirish
 *     tags: [Stage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Stage o'chirildi
 *       '404':
 *         description: Stage topilmadi
 *       '500':
 *         description: Server xatosi
 */
stageRouter.delete("/delete/:id", deleteStage);

/**
 * @swagger
 * /stage/search:
 *   get:
 *     summary: Stagelarni qidirish
 *     tags: [Stage]
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
stageRouter.get("/search", searchStage);

