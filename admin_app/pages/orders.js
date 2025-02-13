import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

// Set the root element for the modal
Modal.setAppElement("#__next");

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const [title, setTitle] = useState('Lease Expiry Notification');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('/api/orders').then(response => {
      const ordersWithDaysPassed = response.data.map(order => {
        const createdAt = new Date(order.createdAt);
        const now = new Date();
        const daysPassed = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));
        return { ...order, daysPassed };
      });
      setOrders(ordersWithDaysPassed);
    });
  }, []);

  const openModal = (email, userName, propertyAddress, leaseEndDate) => {
    const formattedDate = new Date(leaseEndDate).toLocaleDateString(); // Format the date
    setCurrentEmail(email);
    setTitle('Lease Expiry Notification');
    setContent(`
Dear ${userName},<br /><br />
We hope this message finds you well. We are writing to inform you that your lease for the property located at ${propertyAddress} is set to expire on ${formattedDate}.<br /><br />
As the lease end date approaches, we would like to offer you the following options:<br /><br />
1. <b>Lease Renewal</b>: If you wish to continue your stay at the property, please let us know at your earliest convenience. We would be happy to discuss the terms of renewing your lease.<br />
2. <b>Move-Out Process</b>: If you plan to move out, please notify us. We will provide you with the necessary instructions and assistance to ensure a smooth transition.<br /><br />
Should you have any questions or need further assistance, please do not hesitate to contact us at Book Buddy.<br /><br />
Thank you for being a valued tenant. We look forward to your response.<br /><br />
Best regards,<br />
Book Buddy
    `);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTitle('Lease Expiry Notification');
    setContent('');
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.post('/api/send-email', {
        email: currentEmail,
        title,
        content,
      });
      if (response.status === 200) {
        alert(`Email sent successfully to ${currentEmail}`);
        closeModal();
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleTogglePaid = async (orderId) => {
    try {
      const response = await axios.post('/api/toggle-return', { orderId });
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, paid: response.data.paid } : order
          )
        );
      }
    } catch (error) {
      console.error('Error toggling paid status:', error);
    }
  };

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Date</th>
            <th>Return</th>
            <th>Recipient</th>
            <th>Books</th>
            <th>Days Passed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 && orders.map(order => (
            <tr key={order._id}>
              <td>{(new Date(order.createdAt)).toLocaleString()}</td>
              {/* <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
                
                <button
                  type="button"
                  className="btn-primary text-md mb-2"
                  onClick={() => handleTogglePaid(order._id)}

                  >
                  Returned?
                </button>
                {order.paid ? 'YES' : 'NO'}
              </td> */}


              <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
                <label>
                  <input
                    type="checkbox"
                    checked={order.paid}
                    onChange={() => handleTogglePaid(order._id)}
                    className="mr-2"
                  />
                  {order.paid ? 'YES' : 'NO'}
                </label>
              </td>


              <td>
                {order.name} {order.email}<br />
                {order.city} {order.postalCode} {order.country}<br />
                {order.streetAddress}
              </td>
              <td>
                {order.line_items.map((l, index) => (
                  <div key={index}>
                    {l.price_data?.product_data.name} x {l.quantity}<br />
                  </div>
                ))}
              </td>
              <td className={order.daysPassed > 7 ? 'text-red-600' : 'text-green-600'}>{order.daysPassed}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(order.email, order.name, order.streetAddress, order.createdAt)}
                >
                  Mail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Send Email"
      >
        <h2 className="text-blue-500 font-medium text-xl">Send user a reminder</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSendEmail(); }}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <div>
            <button className="btn-red" type="button" onClick={closeModal}>Cancel</button>
            <button className="btn-default" type="submit">Send</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}
