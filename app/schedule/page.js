export default function SchedulePage() {
    return (
      <div className="container mt-5">
        <h1>Schedule</h1>
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January 1, 2024</td>
                <td>La Liga: FC Barcelona vs Real Madrid</td>
                <td>Camp Nou, Barcelona</td>
              </tr>
              <tr>
                <td>February 14, 2024</td>
                <td>Serie A: Juventus vs AC Milan</td>
                <td>Allianz Stadium, Turin</td>
              </tr>
              <tr>
                <td>March 17, 2024</td>
                <td>Premier League: Manchester United vs Liverpool</td>
                <td>Old Trafford, Manchester</td>
              </tr>
              <tr>
                <td>April 1, 2024</td>
                <td>Ligue 1: Paris Saint-Germain vs Olympique Lyonnais</td>
                <td>Parc des Princes, Paris</td>
              </tr>
              <tr>
                <td>May 5, 2024</td>
                <td>Bundesliga: Bayern Munich vs Borussia Dortmund</td>
                <td>Allianz Arena, Munich</td>
              </tr>
              <tr>
                <td>June 21, 2024</td>
                <td>UEFA Champions League Final</td>
                <td>Wembley Stadium, London</td>
              </tr>
              <tr>
                <td>July 4, 2024</td>
                <td>Copa America Final</td>
                <td>Maracanã Stadium, Rio de Janeiro</td>
              </tr>
              <tr>
                <td>August 31, 2024</td>
                <td>FIFA World Cup Qualifiers: Brazil vs Argentina</td>
                <td>Maracanã Stadium, Rio de Janeiro</td>
              </tr>
              <tr>
                <td>September 23, 2024</td>
                <td>UEFA Nations League: Germany vs Italy</td>
                <td>Olympiastadion, Berlin</td>
              </tr>
              <tr>
                <td>October 31, 2024</td>
                <td>MLS Cup Final</td>
                <td>BMO Field, Toronto</td>
              </tr>
              <tr>
                <td>November 28, 2024</td>
                <td>AFC Champions League Final</td>
                <td>King Fahd International Stadium, Riyadh</td>
              </tr>
              <tr>
                <td>December 25, 2024</td>
                <td>Boxing Day Premier League Matches</td>
                <td>Various Locations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  