import { Context } from '../store/store'
import { SyntheticEvent, useContext, useState } from 'react';
import { Meetup } from '../store/meetup';

// eventually this would end up being a reducer
const addMeetup = (meetups:Array<Meetup>, newMeetup:Meetup) => {
    return meetups.concat([newMeetup])
}

function AddPage() {
    const [state, setState] = useContext(Context)
    const [formData, setFormData] = useState({})

    const submitForm = (event:SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            title: { value: string };
            address: { value: string };
            image: { value: string };
            description: { value: string };
        };

        const newMeetup = {
            id: JSON.stringify(new Date().getTime()),
            title: target.title.value,
            address: target.address.value,
            image: target.image.value,
            description: target.description.value
        }

        setFormData(newMeetup) // save local state

        // if form is valid 
        setState({meetups:addMeetup(state.meetups, newMeetup)})
        // end if valid
    }

    return (
        <>
            <h1 className="AddPage">Add Page</h1>
            <form onSubmit={event => {submitForm(event)}}>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" name="image" />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default AddPage;
