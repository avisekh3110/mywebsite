import { useState } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { toast } from "react-toastify";

function ContactPage() {
  const sentToast = () => {
    toast.success("message sent...");
  };

  const errorToast = (error: any) => {
    toast.error(error);
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  }); //formData state.

  const [loading, setLoading] = useState(false); //loading.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }; //handle the form changes.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:8080/", form)
      .then((response) => {
        console.log(response.data);
        sentToast();
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        errorToast(err.message);
      })
      .then(() => setLoading(false));
  };

  return (
    <div className="flex flex-col bg-black h-screen justify-between">
      <Navbar />
      <form
        className="flex flex-col items-center justify-center flex-1 p-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-2xl font-bold mb-6">CONTACT US</h2>
        <div className="w-full max-w-md space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-slate-200 text-black focus:outline-none"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-slate-200 text-black focus:outline-none"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-slate-200 text-black focus:outline-none"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`w-full py-2 ${
              !loading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700"
            } text-white rounded transition`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ContactPage;
