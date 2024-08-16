import './Testimonals.css'
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.webp'
import profile3 from '../assets/profile3.webp'
import profile4 from '../assets/profile4.webp'
import profile5 from '../assets/profile5.webp'

function Testimonial() {
    return (
      <section className="testimonial">
        {/* {/*<-- Testimonials Section -->*/}
        <section className="testimonials-section">

            {/* {/*<-- Section 1 -->*/}
            <section className="section-1">

                {/* {/*<-- Author -->*/}
                <section className="author">

                    <img className="author-img" src={profile1} alt="author-img"/>
                    <section className="author-info">

                        <p className="author-name">Daniel Clifford</p>
                        <p className="author-describtion">Verified Graduate</p>
                    </section>
                </section>
                {/*<-- Highlighted Content -->*/}
                <section className="highlight-content">

                    <p>I was blown away by the sheer variety of events on Epic Events! As a freelancer,</p>
                </section>
                {/*<-- Content -->*/}
                <section className="content">

                    <q>I was blown away by the sheer variety of events on Epic Events! As a freelancer, I'm always looking to expand my network and learn new skills, and this platform has been a game-changer for me. I've attended webinars, conferences, and even a few meetups, and every single one has been incredibly valuable. The user interface is so intuitive, too - I can easily find events that fit my schedule and interests. 5 stars from me!</q>
                </section>
            </section>
            {/*<-- Section 2 -->*/}
            <section className="section-2">

                {/*<-- Author -->*/}
                <section className="author">

                    <img className="author-img" src={profile2} alt="author-img"/>
                    <section className="author-info">

                        <p className="author-name">Jonathan Walters</p>
                        <p className="author-describtion">Verified Graduate</p>
                    </section>
                </section>
                {/*<-- Highlighted Content -->*/}
                <section className="highlight-content">

                    <p>I was a bit skeptical about hosting my own event on Epic Events,
                    </p>
                </section>
                {/*<-- Content -->*/}
                <section className="content">

                    <q>I was a bit skeptical about hosting my own event on Epic Events, but the process was surprisingly smooth. The platform walked me through every step, from creating my event page to managing registrations and communicating with attendees. And the best part? I was able to reach a whole new audience and get some amazing feedback from attendees. I'll definitely be using Epic Events again for my next event!</q>
                </section>
            </section>
            {/*<-- Section 3 -->*/}
            <section className="section-3">

                {/*<-- Author -->*/}
                <section className="author">

                    <img className="author-img" src={profile3} alt="author-img"/>
                    <section className="author-info">

                        <p className="author-name">Kira Whittle</p>
                        <p className="author-describtion">Verified Graduate</p>
                    </section>
                </section>
                {/*<-- Highlighted Content -->*/}
                <section className="highlight-content">

                    <p>I was impressed by how easy it was to leave feedback on Epic Events after attending an event.
                    </p>
                </section>
                {/*<-- Content -->*/}
                <section className="content">

                    <q>I was impressed by how easy it was to leave feedback on Epic Events after attending an event. It's clear that the platform is committed to providing a high-quality experience for users, and the feedback mechanism is a big part of that. I've already seen changes to events based on my feedback, which is amazing. Keep up the great work, Epic Events - you're really making a difference in the events space!</q>
                </section>
            </section>
            {/*<-- Section 4 -->*/}
            <section className="section-4">

                {/*<-- Author -->*/}
                <section className="author">

                    <img className="author-img" src={profile4} alt="author-img"/>
                    <section className="author-info">

                        <p className="author-name">Jeanette Harmon</p>
                        <p className="author-describtion">Verified Graduate</p>
                    </section>
                </section>
                {/*<-- Highlighted Content -->*/}
                <section className="highlight-content">

                    <p>I've tried a few event platforms in the past,
                    </p>
                </section>
                {/*<-- Content -->*/}
                <section className="content">

                    <q>I've tried a few event platforms in the past, but Epic Events is hands-down the most user-friendly. I love that I can filter events by location, date, and category - it makes it so easy to find events that are relevant to me. And the reminders are super helpful, too - I never have to worry about missing an event again. Keep up the great work, Epic Events team!</q>
                </section>
            </section>
            {/*<-- Section 5 -->*/}
            <section className="section-5">

                {/*<-- Author -->*/}
                <section className="author">

                    <img className="author-img" src={profile5} alt="author-img"/>
                    <section className="author-info">

                        <p className="author-name">Patrick Abrams</p>
                        <p className="author-describtion">Verified Graduate</p>
                    </section>
                </section>
                {/*<-- Highlighted Content -->*/}
                <section className="highlight-content">

                    <p>As a busy professional, I don't have a lot of time to waste on events that aren't relevant to me.
                    </p>
                </section>
                {/*<-- Content -->*/}
                <section className="content">

                    <q>As a busy professional, I don't have a lot of time to waste on events that aren't relevant to me. That's why I love Epic Events' personalized event recommendations. The platform somehow knows exactly what I'm interested in, and suggests events that are always spot-on. It's saved me so much time and energy, and I've met some amazing people along the way. Thanks, Epic Events!</q>
                </section>
            </section>
        </section>
      </section>
    );
  }

  export default Testimonial