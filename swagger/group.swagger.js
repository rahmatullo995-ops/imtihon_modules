/**
 * @swagger
 * tags:
 *   name: Group
 *   description: Grouplarni boshqarish
 */

/**
 * @swagger
 * /group/register:
 *   post:
 *     summary: Yangi Group qo'shish
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               group_name:
 *                 type: string
 *               lesson_start_time:
 *                 type: string
 *               lesson_continuous:
 *                 type: string
 *               lesson_week_day:
 *                 type: string
 *               group_stage_id:
 *                 type: integer
 *               room_number:
 *                 type: string
 *               room_floor:
 *                 type: integer
 *               branch_id:
 *                 type: integer
 *               lessons_quant:
 *                 type: integer
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Group muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
groupRouter.post("/register", validateSchema(registerGroupValidationSchema), groupRegister);

/**
 * @swagger
 * /group/get:
 *   get:
 *     summary: Barcha Grouplarni olish
 *     tags: [Group]
 *     responses:
 *       '200':
 *         description: Grouplar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
groupRouter.get("/get", getGroups);

/**
 * @swagger
 * /group/get/{id}:
 *   get:
 *     summary: Groupni ID bo'yicha olish
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Group topildi
 *       '404':
 *         description: Group topilmadi
 *       '500':
 *         description: Server xatosi
 */
groupRouter.get("/get/:id", getGroupById);

/**
 * @swagger
 * /group/update/{id}:
 *   put:
 *     summary: Groupni yangilash
 *     tags: [Group]
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
 *               group_name:
 *                 type: string
 *               lesson_start_time:
 *                 type: string
 *               lesson_continuous:
 *                 type: string
 *               lesson_week_day:
 *                 type: string
 *               group_stage_id:
 *                 type: integer
 *               room_number:
 *                 type: string
 *               room_floor:
 *                 type: integer
 *               branch_id:
 *                 type: integer
 *               lessons_quant:
 *                 type: integer
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Group yangilandi
 *       '404':
 *         description: Group topilmadi
 *       '500':
 *         description: Server xatosi
 */
groupRouter.put("/update/:id", validateSchema(updateGroupValidationSchema), updateGroup);

/**
 * @swagger
 * /group/delete/{id}:
 *   delete:
 *     summary: Groupni o'chirish
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Group o'chirildi
 *       '404':
 *         description: Group topilmadi
 *       '500':
 *         description: Server xatosi
 */
groupRouter.delete("/delete/:id", deleteGroup);

/**
 * @swagger
 * /group/search:
 *   get:
 *     summary: Grouplarni qidirish
 *     tags: [Group]
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
groupRouter.get("/search", searchGroup);

