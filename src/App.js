import React from 'react';
import Post from './components/post.js'
import { Navbar, NavItem } from './components/navbar.js';
import { ReactComponent as ParentsIcon } from './icons/parents.svg';
import { ReactComponent as AnnouncementsIcon } from './icons/announcement.svg';
import { ReactComponent as CalendarIcon } from './icons/calendar.svg';
import { ReactComponent as FormsIcon } from './icons/forms.svg';
import { ReactComponent as SpotlightIcon } from './icons/spotlight.svg';
import { ReactComponent as DickinsonIcon } from './icons/dhs-logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar
        navLogo={<DickinsonIcon className="nav-logo" />}
      >
        <NavItem title="Parents' Portal" link="#" icon={<ParentsIcon />} />
        <NavItem title="Calendar" link="#" icon={<CalendarIcon/>}/>
        <NavItem title="Announcements" link="#" icon={<AnnouncementsIcon/>}/>
        <NavItem title="Forms and Registration" link="#" icon={<FormsIcon/>}/>
        <NavItem title="Spotlight" link="#" icon={<SpotlightIcon/>}/>
      </Navbar>
      < Post title = "Welcome To DHS"
      dateCreated = {
        new Date()
      }
      content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, neque, unde nostrum nobis eius commodi ipsa, reprehenderit aperiam cum deserunt deleniti enim tempore pariatur distinctio beatae! Ex architecto impedit perferendis odio iste mollitia quam ea, cum earum alias. Ad illum beatae aliquam perferendis! Inventore praesentium beatae facilis voluptatibus consectetur ad?"
      author = {
        {
          name: 'Google Docs',
          imgSrc: ''
        }
      }
      />
      < Post title = "Welcome To DHS"
      dateCreated = {
        new Date()
      }
      content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, neque, unde nostrum nobis eius commodi ipsa, reprehenderit aperiam cum deserunt deleniti enim tempore pariatur distinctio beatae! Ex architecto impedit perferendis odio iste mollitia quam ea, cum earum alias. Ad illum beatae aliquam perferendis! Inventore praesentium beatae facilis voluptatibus consectetur ad?"
      author = {
        {
          name: 'Google Docs',
          imgSrc: ''
        }
      }
      />
      <Post title="Welcome To DHS" dateCreated={new Date()} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, neque, unde nostrum nobis eius commodi ipsa, reprehenderit aperiam cum deserunt deleniti enim tempore pariatur distinctio beatae! Ex architecto impedit perferendis odio iste mollitia quam ea, cum earum alias. Ad illum beatae aliquam perferendis! Inventore praesentium beatae facilis voluptatibus consectetur ad?" author={{name: 'Google Docs', imgSrc: ''}} />
    </div>
  );
}

export default App;
