import "./App.css";
function Header() {
  return (
    <header>
      <div className="banner">
        <h1>Sartre's List</h1>
        <h3>Better-Dressed People</h3>
      </div>
      <nav>
        <ul aria-label="Main Navigation" role="navigation">
          <a href="#">Women's</a>
          <a href="#">Men's</a>
          <a href="#">On the Street</a>
          <a href="#">The Catwalk</a>
          <a href="#">AdWatch</a>
          <a href="#">About</a>
        </ul>
      </nav>
    </header>
  );
}

function Blog1() {
  return (
    <article className="blog-post">
      <p className="date">11/12/20</p>
      <h2>On the Street in Brooklyn</h2>
      <img src="./public/blog1.jpg" alt="Street Fashion in Brooklyn" />
      <p className="post-content">
        <span className="dropcap">L</span>orem ipsum dolor sit amet consectetur
        adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
        placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
        aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
        bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
        posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
        torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit
        amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
        pellentesque sem placerat. In id cursus mi pretium tellus duis
        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
        taciti sociosqu. Ad litora torquent per conubia nostra inceptos
        himenaeos.
      </p>
      <div className="bottom-right">
        <a href="#">Continues...</a>
      </div>
    </article>
  );
}

function Blog2() {
  return (
    <article className="blog-post">
      <p className="date">11/11/20</p>
      <h2>Vintage in Vogue</h2>
      <img src="./public/blog2.jpg" alt="Vintage Fashion Photo" />
      <p className="post-content">
        <span className="dropcap">L</span>orem ipsum dolor sit amet consectetur
        adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
        placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
        aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
        bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
        posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
        torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit
        amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
        pellentesque sem placerat. In id cursus mi pretium tellus duis
        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
        taciti socosqu. Ad litora torquent per conubia nostra inceptos
        himenaeos.
      </p>
      <div className="bottom-right">
        <a href="#">Continues...</a>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer>
      <nav>
        <ul aria-label="Footer Navigation" role="navigation">
          <li>
            <a href="#">Women's</a>
          </li>
          <li>
            <a href="#">Men's</a>
          </li>
          <li>
            <a href="#">On the Street</a>
          </li>
          <li>
            <a href="#">The Catwalk</a>
          </li>
          <li>
            <a href="#">AdWatch</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <p className="copyright">
        &copy; 2025 Sartre's List. All rights reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Blog1 />
        <Blog2 />
      </main>
      <Footer />
    </>
  );
}
export default App;
