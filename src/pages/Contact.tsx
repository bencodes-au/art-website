const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6">Fill out the form below to get in touch with us:</p>

      <form className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
