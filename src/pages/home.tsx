import { useContext } from 'react';
import { Context } from '../store/store'
import MeetupComponent from '../components/meetup/meetup'
import { Meetup } from '../store/meetup';

function HomePage() {
    const [state] = useContext(Context)
    return (
    <div className="App">
        {state.meetups.map((item: Meetup)=>{
            return <MeetupComponent 
                        key={item.id}
                        id={item.id}
                        address={item.address}
                        image={item.image}
                        description={item.description}
                        title={item.title} />
        })}
    </div>
  );
}

export default HomePage;
