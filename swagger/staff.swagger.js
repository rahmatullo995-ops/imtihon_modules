/**
 * @swagger
 * tags:
 *   name: Stuff 2
 *   description: Stuff 2larni boshqarish
 */

/**
 * @swagger
 * /staff/register:
 *   post:
 *     summary: Yangi Stuff 2 qo'shish
 *     tags: [Stuff 2]
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
 *               login:
 *                 type: string
 *               parol:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Stuff 2 muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
staffRouter.post("/register", validateSchema(registerStaffValidationSchema), staffRegister);

/**
 * @swagger
 * /staff/get:
 *   get:
 *     summary: Barcha Stuff 2larni olish
 *     tags: [Stuff 2]
 *     responses:
 *       '200':
 *         description: Stuff 2lar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
staffRouter.get("/get", getStaffs);

/**
 * @swagger
 * /staff/get/{id}:
 *   get:
 *     summary: Stuff 2ni ID bo'yicha olish
 *     tags: [Stuff 2]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Stuff 2 topildi
 *       '404':
 *         description: Stuff 2 topilmadi
 *       '500':
 *         description: Server xatosi
 */
staffRouter.get("/get/:id", getStaffById);

/**
 * @swagger
 * /staff/update/{id}:
 *   put:
 *     summary: Stuff 2ni yangilash
 *     tags: [Stuff 2]
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
 *               login:
 *                 type: string
 *               parol:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Stuff 2 yangilandi
 *       '404':
 *         description: Stuff 2 topilmadi
 *       '500':
 *         description: Server xatosi
 */
staffRouter.put("/update/:id", validateSchema(updateStaffValidationSchema), updateStaff);

/**
 * @swagger
 * /staff/delete/{id}:
 *   delete:
 *     summary: Stuff 2ni o'chirish
 *     tags: [Stuff 2]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Stuff 2 o'chirildi
 *       '404':
 *         description: Stuff 2 topilmadi
 *       '500':
 *         description: Server xatosi
 */
staffRouter.delete("/delete/:id", deleteStaff);

/**
 * @swagger
 * /staff/search:
 *   get:
 *     summary: Stuff 2larni qidirish
 *     tags: [Stuff 2]
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
staffRouter.get("/search", searchStaff);

