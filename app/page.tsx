import ExploreBtn from "./components/ExploreBtn";

export default function Home() {

  return (
        <section>
          <h1 className="text-center"> The Hub for every Dev <br/> Event you can miss.</h1>
          <p className="text-center mt-5">Hackathons, Meetups, and conferences, All in here.</p>
          <ExploreBtn />

          <div className="mt-20 space-y-7">
            <h3>Featured Events</h3>

            <ul className="events">
              {[1,2,3,4,5].map((event)=>
                <li key={event} className="event-card">
                  <h4>Event Title {event}</h4>
                  <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                  <span className="mt-3 block text-xs">Date: 20th Aug, 2023</span>
                </li>
              )}
            </ul>

          </div>

        </section>
  );
}
