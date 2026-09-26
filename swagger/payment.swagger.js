/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Paymentlarni boshqarish
 */

/**
 * @swagger
 * /payment/register:
 *   post:
 *     summary: Yangi Payment qo'shish
 *     tags: [Payment]
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
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *               payment_date:
 *                 type: string
 *                 format: date
 *               price:
 *                 type: integer
 *               is_paid:
 *                 type: boolean
 *               total_attent:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Payment muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.post("/register", validateSchema(registerPaymentValidationSchema), paymentRegister);

/**
 * @swagger
 * /payment/get:
 *   get:
 *     summary: Barcha Paymentlarni olish
 *     tags: [Payment]
 *     responses:
 *       '200':
 *         description: Paymentlar ro'yxati
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.get("/get", getPayments);

/**
 * @swagger
 * /payment/get/{id}:
 *   get:
 *     summary: Paymentni ID bo'yicha olish
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Payment topildi
 *       '404':
 *         description: Payment topilmadi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.get("/get/:id", getPaymentById);

/**
 * @swagger
 * /payment/update/{id}:
 *   put:
 *     summary: Paymentni yangilash
 *     tags: [Payment]
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
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *               payment_date:
 *                 type: string
 *                 format: date
 *               price:
 *                 type: integer
 *               is_paid:
 *                 type: boolean
 *               total_attent:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Payment yangilandi
 *       '404':
 *         description: Payment topilmadi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.put("/update/:id", validateSchema(updatePaymentValidationSchema), updatePayment);

/**
 * @swagger
 * /payment/delete/{id}:
 *   delete:
 *     summary: Paymentni o'chirish
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Payment o'chirildi
 *       '404':
 *         description: Payment topilmadi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.delete("/delete/:id", deletePayment);

