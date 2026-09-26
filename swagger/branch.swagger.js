/**
 * @swagger
 * tags:
 *   name: Branch
 *   description: Branchlarni boshqarish
 */

/**
 * @swagger
 * /branch/register:
 *   post:
 *     summary: Yangi Branch qo'shish
 *     tags: [Branch]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               call_number:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Branch muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
branchRouter.post("/register", validateSchema(registerBranchValidationSchema), branchRegister);

/**
 * @swagger
 * /branch/get:
 *   get:
 *     summary: Barcha Branchlarni olish
 *     tags: [Branch]
 *     responses:
 *       '200':
 *         description: Branchlar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
branchRouter.get("/get", getBranchs);

/**
 * @swagger
 * /branch/get/{id}:
 *   get:
 *     summary: Branchni ID bo'yicha olish
 *     tags: [Branch]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Branch topildi
 *       '404':
 *         description: Branch topilmadi
 *       '500':
 *         description: Server xatosi
 */
branchRouter.get("/get/:id", getBranchById);

/**
 * @swagger
 * /branch/update/{id}:
 *   put:
 *     summary: Branchni yangilash
 *     tags: [Branch]
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
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               call_number:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Branch yangilandi
 *       '404':
 *         description: Branch topilmadi
 *       '500':
 *         description: Server xatosi
 */
branchRouter.put("/update/:id", validateSchema(updateBranchValidationSchema), updateBranch);

/**
 * @swagger
 * /branch/delete/{id}:
 *   delete:
 *     summary: Branchni o'chirish
 *     tags: [Branch]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Branch o'chirildi
 *       '404':
 *         description: Branch topilmadi
 *       '500':
 *         description: Server xatosi
 */
branchRouter.delete("/delete/:id", deleteBranch);

/**
 * @swagger
 * /branch/search:
 *   get:
 *     summary: Branchlarni qidirish
 *     tags: [Branch]
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
branchRouter.get("/search", searchBranch);

