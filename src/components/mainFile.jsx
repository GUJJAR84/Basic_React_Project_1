const HeroSection = () => {
    return (
      <main className="hero">
        <div className="hero-content">
          <h1>Your Feet Deserve Better</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            provident dolore eveniet tenetur. Doloribus accusamus quas temporibus
            quasi eius quod voluptas incidunt commodi! Veniam sequi, quaerat fuga
            obcaecati facere id! Ullam sit exercitationem sed inventore voluptas
            perferendis odit, explicabo ipsam repudiandae asperiores esse,
            laudantium fugiat quibusdam eius iste a, amet sequi architecto maiores
            numquam ut voluptatum.
          </p>
        <div className="hero-btn">
            <button>Shop now</button>
            <button className="Secondary-button">Category</button>
        </div>
        <div className="Shopping"><p>Also Available on</p></div>
        <div className="brand-icons">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
        </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero" />
        </div>
      </main>
    );
  };
  export default HeroSection;