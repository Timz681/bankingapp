import HeaderBox from '@/components/HeaderBox';  
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
const Home = () => {
    const loggedIn = { firstName: 'Robert', lastName: 'Urso', email: 'Boburso123@comcast.net'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || 'Guest'}  
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={0} // Provide a default or valid value
                        totalCurrentBalance={45000.53}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 4000}, {currentBalance: 500}]}
            
            />
        </section>
    );
};

export default Home;
