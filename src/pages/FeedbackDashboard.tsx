import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { ref, onValue, remove } from "firebase/database";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
  id?: string; // optional, we'll store Firebase key for deletion
}

interface CustomOrderData {
  name: string;
  contact: string;
  email: string;
  cakeType: string;
  flavor: string;
  theme: string;
  size: string;
  deliveryDate: string;
  deliveryTime: string;
  address: string;
  createdAt: string;
  id?: string; // optional, Firebase key
}

const FeedbackDashboard = () => {
  const [feedbackList, setFeedbackList] = useState<FeedbackData[]>([]);
  const [customOrders, setCustomOrders] = useState<CustomOrderData[]>([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Load feedbacks
  useEffect(() => {
    const feedbackRef = ref(db, "feedbacks/");
    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedFeedbacks = Object.entries(data).map(([key, value]: any) => ({
          id: key,
          ...(value as FeedbackData),
        }));
        setFeedbackList(loadedFeedbacks);
      } else {
        setFeedbackList([]);
      }
      setLoadingFeedback(false);
    });
  }, []);

  // Load custom orders
  useEffect(() => {
    const ordersRef = ref(db, "customOrders/");
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedOrders = Object.entries(data).map(([key, value]: any) => ({
          id: key,
          ...(value as CustomOrderData),
        }));
        loadedOrders.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setCustomOrders(loadedOrders);
      } else {
        setCustomOrders([]);
      }
      setLoadingOrders(false);
    });
  }, []);

  // Delete a feedback
  const handleDeleteFeedback = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    const feedbackRef = ref(db, `feedbacks/${id}`);
    remove(feedbackRef)
      .then(() => alert("Feedback deleted successfully"))
      .catch((err) => alert("Error deleting feedback: " + err));
  };

  // Delete a custom order
  const handleDeleteOrder = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    const orderRef = ref(db, `customOrders/${id}`);
    remove(orderRef)
      .then(() => alert("Order deleted successfully"))
      .catch((err) => alert("Error deleting order: " + err));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-br from-pink-100 via-white to-purple-100 py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Feedback Section */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-pink-200">
            <h1 className="text-4xl font-cursive text-center text-pink-600 mb-8">
              💌 Feedback Dashboard
            </h1>

            {loadingFeedback ? (
              <p className="text-center text-gray-500">Loading feedbacks...</p>
            ) : feedbackList.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {feedbackList.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 shadow-md rounded-xl p-5 hover:shadow-lg transition-all"
                  >
                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteFeedback(item.id!)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                    >
                      ✖
                    </button>

                    <h3 className="text-xl font-semibold text-purple-700 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{item.email}</p>
                    <p className="text-gray-800 italic">“{item.feedback}”</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No feedbacks submitted yet 😇
              </p>
            )}
          </div>

          {/* Custom Orders Section */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-purple-200">
            <h1 className="text-4xl font-cursive text-center text-purple-600 mb-8">
              🎂 Custom Orders Dashboard
            </h1>

            {loadingOrders ? (
              <p className="text-center text-gray-500">Loading custom orders...</p>
            ) : customOrders.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {customOrders.map((order) => (
                  <div
                    key={order.id}
                    className="relative bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 shadow-md rounded-xl p-5 hover:shadow-lg transition-all"
                  >
                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteOrder(order.id!)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                    >
                      ✖
                    </button>

                    <h3 className="text-xl font-semibold text-purple-700 mb-1">
                      {order.name} ({order.contact})
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{order.email}</p>
                    <p className="text-gray-800 mb-1">
                      <strong>Cake:</strong> {order.cakeType} - {order.flavor}, {order.size}
                    </p>
                    <p className="text-gray-800 mb-1">
                      <strong>Theme:</strong> {order.theme}
                    </p>
                    <p className="text-gray-800 mb-1">
                      <strong>Delivery:</strong> {order.deliveryDate} at {order.deliveryTime}
                    </p>
                    <p className="text-gray-800 mb-1">
                      <strong>Address:</strong> {order.address}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Submitted on: {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No custom orders submitted yet 😇
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeedbackDashboard;
