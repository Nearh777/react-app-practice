
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import users from './user.json';
import data from './data.json'


export const App = () => {
  return (
    <div
    
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile 
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}

      />
      <Statistics
      
        title={data.title}
        stats={data}
      />
    </div>
  );
};

