/**
 * @swagger
 * tags:
 *   name: GroupStaff
 *   description: GroupStafflarni boshqarish
 */

/**
 * @swagger
 * /group_staff/register:
 *   post:
 *     summary: Yangi GroupStaff qo'shish
 *     tags: [GroupStaff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               group_id:
 *                 type: integer
 *               stuff_id:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: GroupStaff muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
groupStaffRouter.post("/register", validateSchema(registerGroupStaffValidationSchema), groupStaffRegister);

/**
 * @swagger
 * /group_staff/get:
 *   get:
 *     summary: Barcha GroupStafflarni olish
 *     tags: [GroupStaff]
 *     responses:
 *       '200':
 *         description: GroupStafflar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
groupStaffRouter.get("/get", getGroupStaffs);

/**
 * @swagger
 * /group_staff/get/{id}:
 *   get:
 *     summary: GroupStaffni ID bo'yicha olish
 *     tags: [GroupStaff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: GroupStaff topildi
 *       '404':
 *         description: GroupStaff topilmadi
 *       '500':
 *         description: Server xatosi
 */
groupStaffRouter.get("/get/:id", getGroupStaffById);

/**
 * @swagger
 * /group_staff/update/{id}:
 *   put:
 *     summary: GroupStaffni yangilash
 *     tags: [GroupStaff]
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
 *               group_id:
 *                 type: integer
 *               stuff_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: GroupStaff yangilandi
 *       '404':
 *         description: GroupStaff topilmadi
 *       '500':
 *         description: Server xatosi
 */
groupStaffRouter.put("/update/:id", validateSchema(updateGroupStaffValidationSchema), updateGroupStaff);

/**
 * @swagger
 * /group_staff/delete/{id}:
 *   delete:
 *     summary: GroupStaffni o'chirish
 *     tags: [GroupStaff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: GroupStaff o'chirildi
 *       '404':
 *         description: GroupStaff topilmadi
 *       '500':
 *         description: Server xatosi
 */
groupStaffRouter.delete("/delete/:id", deleteGroupStaff);

