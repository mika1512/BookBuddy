import {mongooseConnect} from "@/lib/mongoose";
import {Order} from "@/models/Order";

export default async (req, res) => {
  if (req.method === 'POST') {
    const { orderId } = req.body;

    try {
      await mongooseConnect();
      
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }

      order.paid = !order.paid;
      await order.save();

      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
