const reviews = [
  {
    name: "Ananya Sharma",
    trip: "Manali Trip",
    text: "Everything was well organized, from pickup to hotel check-in. Loved the itinerary pace.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Rohan Mehta",
    trip: "Goa Trip",
    text: "Good value for money. The booking process was simple and support was quick to respond.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Nair",
    trip: "Kerala Backwaters",
    text: "The houseboat stay was the highlight. Would book through them again for sure.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <h2 className="section-title">What Travelers Say</h2>
        <p className="section-subtitle">Real feedback from recent trips</p>

        <div className="testimonial-grid">
          {reviews.map((r, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-footer">
                <img src={r.avatar} alt={r.name} className="avatar" />
                <div>
                  <p className="testimonial-name">{r.name}</p>
                  <p className="testimonial-trip">{r.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;