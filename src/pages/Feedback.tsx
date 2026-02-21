import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { ref, push } from "firebase/database";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create a reference to the "feedbacks" node
      const feedbackRef = ref(db, "feedbacks");

      // Push feedback data into Firebase
      await push(feedbackRef, {
        name: formData.name,
        email: formData.email,
        feedback: formData.feedback,
        timestamp: new Date().toISOString(),
      });

      console.log("Feedback submitted successfully!");
      setSubmitted(true);
      setFormData({ name: "", email: "", feedback: "" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-pink-50 py-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Share Your Feedback 💬
          </h2>
          <p className="text-gray-600 mb-8">
            We’d love to hear your thoughts about your experience with Tastebuds
            Mumbai!
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg font-medium">
              🎉 Thank you for your feedback! We truly appreciate your time.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="text-left">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="text-left">
                <label htmlFor="feedback" className="block font-medium mb-2">
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  placeholder="Share your experience..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-transform hover:scale-105"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;
