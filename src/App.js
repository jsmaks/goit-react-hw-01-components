import Profile from './components/Profile/Profile';
import user from './user.json';

import Statistical from './components/Statistical/Statistical';
import statisticalData from './stasistical-data.json';

import FriendList from './components/Friends/Friends';
import friends from './friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical 
      title="Upload stats" 
      stats={statisticalData} 
      />
      <FriendList 
      friends={friends} 
      />
      <TransactionHistory 
      items={transactions} 
      />
    </div>
  );
};
export default App;
