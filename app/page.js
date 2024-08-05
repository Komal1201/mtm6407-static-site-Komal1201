export default function HomePage() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Sports Hub</h1>
      <p>Your one-stop destination for all sports-related news, updates, and galleries.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <img src="https://images.pexels.com/photos/17879546/pexels-photo-17879546/free-photo-of-close-up-of-a-logo-of-the-fc-barcelona-football-club.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="FC Barcelona" />
            <div className="card-body">
              <h5 className="card-title">FC Barcelona</h5>
              <p className="card-text">Stay updated with the latest news and matches of FC Barcelona.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <img src="https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Real Madrid" />
            <div className="card-body">
              <h5 className="card-title">Real Madrid</h5>
              <p className="card-text">Catch all the latest updates and match highlights of Real Madrid.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-light mb-4">
            <img src="https://plus.unsplash.com/premium_photo-1661856745445-14fd848f0e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SnV2ZW50dXMlMjBmb290YmFsbCUyMHRlYW18ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Juventus" />
            <div className="card-body">
              <h5 className="card-title">Juventus</h5>
              <p className="card-text">Follow the journey and matches of Juventus here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
