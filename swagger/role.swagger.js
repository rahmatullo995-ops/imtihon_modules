/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Rolelarni boshqarish
 */

/**
 * @swagger
 * /role/register:
 *   post:
 *     summary: Yangi Role qo'shish
 *     tags: [Role]
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
 *         description: Role muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
roleRouter.post("/register", validateSchema(registerRoleValidationSchema), roleRegister);

/**
 * @swagger
 * /role/get:
 *   get:
 *     summary: Barcha Rolelarni olish
 *     tags: [Role]
 *     responses:
 *       '200':
 *         description: Rolelar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
roleRouter.get("/get", getRoles);

/**
 * @swagger
 * /role/get/{id}:
 *   get:
 *     summary: Roleni ID bo'yicha olish
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Role topildi
 *       '404':
 *         description: Role topilmadi
 *       '500':
 *         description: Server xatosi
 */
roleRouter.get("/get/:id", getRoleById);

/**
 * @swagger
 * /role/update/{id}:
 *   put:
 *     summary: Roleni yangilash
 *     tags: [Role]
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
 *         description: Role yangilandi
 *       '404':
 *         description: Role topilmadi
 *       '500':
 *         description: Server xatosi
 */
roleRouter.put("/update/:id", validateSchema(updateRoleValidationSchema), updateRole);

/**
 * @swagger
 * /role/delete/{id}:
 *   delete:
 *     summary: Roleni o'chirish
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Role o'chirildi
 *       '404':
 *         description: Role topilmadi
 *       '500':
 *         description: Server xatosi
 */
roleRouter.delete("/delete/:id", deleteRole);

/**
 * @swagger
 * /role/search:
 *   get:
 *     summary: Rolelarni qidirish
 *     tags: [Role]
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
roleRouter.get("/search", searchRole);

