import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { subHours } from "date-fns";

export default function HomeStats() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numUniqueProducts, setNumUniqueProducts] = useState(0);
  const [numCategories, setNumCategories] = useState(0);
  const [numUsers, setNumUsers] = useState(0);
  const [overdueUnpaidOrderEmails, setOverdueUnpaidOrderEmails] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/orders')
      .then(res => {
        console.log("Orders fetched:", res.data);

        // Calculate daysPassed and filter overdue unpaid orders
        const ordersWithDaysPassed = res.data.map(order => {
          const createdAt = new Date(order.createdAt);
          const now = new Date();
          const daysPassed = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));
          return { ...order, daysPassed };
        });

        const overdueUnpaidEmails = ordersWithDaysPassed
          .filter(order => order.daysPassed > 7 && !order.paid)
          .map(order => order.email);
        
        setOrders(ordersWithDaysPassed);
        setOverdueUnpaidOrderEmails(overdueUnpaidEmails);

        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
        setIsLoading(false);
      });

    axios.get('/api/products')
      .then(res => {
        console.log("Products fetched:", res.data); // Debug log
        const uniqueProductNames = new Set(res.data.map(product => product.title));
        setNumUniqueProducts(uniqueProductNames.size);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });

    axios.get('/api/categories')
      .then(res => {
        console.log("Categories count fetched:", res.data); // Debug log
        setNumCategories(res.data.length);
      })
      .catch(error => {
        console.error("Error fetching categories count:", error);
      });
    axios.get('/api/users')
      .then(res => {
        console.log("User count fetched:", res.data);
        setNumUsers(res.data.count);
      })
      .catch(error => {
        console.error("Error fetching user count:", error);
      });
  }, []);

  function ordersTotal(orders) {
    let sum = 0;
    orders.forEach(order => {
      const { line_items } = order;
      line_items.forEach(li => {
        const lineSum = li.quantity * li.price_data.unit_amount / 100;
        sum += lineSum;
      });
    });
    return new Intl.NumberFormat('vi-VN').format(sum);
  }

  function topBuyer(orders) {
    const buyerMap = new Map();
    orders.forEach(order => {
      const { email, line_items } = order;
      const totalItems = line_items.reduce((sum, item) => sum + item.quantity, 0);
      if (buyerMap.has(email)) {
        buyerMap.set(email, buyerMap.get(email) + totalItems);
      } else {
        buyerMap.set(email, totalItems);
      }
    });

    let topBuyer = null;
    let maxItems = 0;
    buyerMap.forEach((totalItems, email) => {
      if (totalItems > maxItems) {
        topBuyer = email;
        maxItems = totalItems;
      }
    });

    return topBuyer;
  }

  function topProduct(orders) {
    const productMap = new Map();
    orders.forEach(order => {
      const { line_items } = order;
      console.log("Order line items:", line_items); // Debug log
      line_items.forEach(item => {
        const { name } = item.price_data.product_data;
        console.log("Processing item:", item); // Debug log
        if (productMap.has(name)) {
          productMap.set(name, productMap.get(name) + item.quantity);
        } else {
          productMap.set(name, item.quantity);
        }
      });
    });

    let topProduct = null;
    let maxQuantity = 0;
    productMap.forEach((quantity, name) => {
      if (quantity > maxQuantity) {
        topProduct = name;
        maxQuantity = quantity;
      }
    });

    return topProduct;
  }

  if (isLoading) {
    return (
      <div className="my-4">
        <Spinner fullWidth={true} />
      </div>
    );
  }

  const ordersToday = orders.filter(o => new Date(o.createdAt) > subHours(new Date(), 24));
  const ordersWeek = orders.filter(o => new Date(o.createdAt) > subHours(new Date(), 24 * 7));
  const ordersMonth = orders.filter(o => new Date(o.createdAt) > subHours(new Date(), 24 * 30));
  const topBuyerEmail = topBuyer(orders);
  const topProductName = topProduct(orders);
  console.log("Top Product Name:", topProductName); // Debug log

  return (
    <div>
      <h2 className="mt-5 mb-2 font-medium text-2xl">Library Statistic</h2>
      <div className="tiles-grid">
        <div className="tile">
          <h3 className="tile-header">Number of Products</h3>
          <div className="tile-number">{numUniqueProducts}</div>
          <div className="tile-desc">total products in the library</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">Number of Categories</h3>
          <div className="tile-number">{numCategories}</div>
          <div className="tile-desc">total categories in the library</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">Number of Readers</h3>
          <div className="tile-number">{numUsers}</div>
          <div className="tile-desc">total users in the library</div>
        </div>
      </div>

      <h2 className="mt-5 mb-2 font-medium text-2xl">Orders</h2>
      <div className="tiles-grid">
        <div className="tile">
          <h3 className="tile-header">Today</h3>
          <div className="tile-number">{ordersToday.length}</div>
          <div className="tile-desc">{ordersToday.length} orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This week</h3>
          <div className="tile-number">{ordersWeek.length}</div>
          <div className="tile-desc">{ordersWeek.length} orders this week</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This month</h3>
          <div className="tile-number">{ordersMonth.length}</div>
          <div className="tile-desc">{ordersMonth.length} orders this month</div>
        </div>
      </div>

      <h2 className="mt-5 mb-2 font-medium text-2xl">Top Reader</h2>
      <div className="tile">
        <h3 className="tile-header">Top Reader</h3>
        <div className="tile-number">{topBuyerEmail}</div>
        <div className="tile-desc">has borrowed the most books</div>
      </div>
      <h2 className="mt-5 mb-2 font-medium text-2xl">Top Book</h2>
      <div className="tile">
        <h3 className="tile-header">Top Book</h3>
        <div className="tile-number">{topProductName || 'No product found'}</div>
        <div className="tile-desc">is the most borrowed book</div>
      </div>
      <h2 className="mt-5 mb-2 font-medium text-2xl">Orders return late</h2>
      <div className="tiles-grid">
        {overdueUnpaidOrderEmails.length > 0 ? (
          overdueUnpaidOrderEmails.map((email, index) => (
            <div key={index} className="tile">
              <h3 className="tile-header">{email}</h3>
            </div>
          ))
        ) : (
          <div className="tile">
            <h3 className="tile-header">No overdue unpaid orders</h3>
          </div>
        )}
      </div>
    </div>
  );
}
