import { useState, useEffect } from "react";
import { instance } from "../../utils/axios";
import AddCardForm from "./AddCardForm";
import { getRandomColor } from "../../utils/RandomColours";

const Hero = () => {
    const [creditCards, setCreditCards] = useState([]);
    const [showAddCardForm, setShowAddCardForm] = useState(false);
    const token = localStorage.getItem("token");

    const [totalLimit, setTotalLimit] = useState(0);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);

    // Fetching the existing credit cards from the server
    const fetchCreditCards = async () => {
        try {
            const response = await instance.get(`/user/₹{token}`, {
                headers: { Authorization: `Bearer ₹{token}` },
            });
            const cards = response.data.creditCards;
            setCreditCards(cards);

            // Calculate total limit, total expenditure, and total balance
            const limit = cards.reduce((acc, card) => acc + card.limit, 0);
            const expenditure = cards.reduce((acc, card) => acc + card.usedAmount, 0);
            const balance = limit - expenditure;

            setTotalLimit(limit);
            setTotalExpenditure(expenditure);
            setTotalBalance(balance);
        } catch (error) {
            console.error("Error fetching credit cards:", error);
        }
    };

    useEffect(() => {
        fetchCreditCards();
    }, [token]);

    // Handle when a new card is added
    const handleCardAdded = (newCardData) => {
        setCreditCards((prevCards) => [...prevCards, newCardData]); // Update the card list dynamically
        setShowAddCardForm(false); // Close the form
    };
    
    const isAddCardDisabled = creditCards.length >= 5;

    // Format the card number to display only the last 4 digits, keeping spaces intact
    const formatCardNumber = (cardNumber) => {
        const visibleDigits = cardNumber.slice(-4); // Last 4 digits of the card
        const hiddenPart = cardNumber.slice(0, -4).replace(/\d/g, 'X'); // Replace digits with 'X'
        
        return hiddenPart + visibleDigits;
    };

    return (
        <div className="w-[90%] flex flex-col gap-5 min-h-[65%] border rounded-2xl p-5 shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)]">
            <div className="flex justify-between w-full items-center">
                <h1 className="text-white text-xl">Details</h1>
                <i className="fa-solid fa-grip text-white border rounded-full p-3"></i>
            </div>

            <div className="bar w-[100%] h-[5vh] bg-zinc-400 overflow-hidden shadow-2xl rounded-xl">
                <div className="status w-[30%] rounded-xl h-full bg-[#00dfc4]"></div>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="text-white text-xl">
                    Cards <span className="text-sm bg-zinc-800 p-1 rounded-md">{creditCards.length}</span>
                </h1>
                <div className="cards flex gap-5 px-5 flex-wrap">
                    {creditCards.map((card, index) => (
                        <div
                            key={index}
                            className="card flex justify-center items-center flex-col cursor-pointer"
                            style={{
                                backgroundColor: getRandomColor(),
                                borderRadius: '0.5rem',
                                height: '9rem',
                                width: '14rem',
                            }}
                        >
                            <h3>{card.nameOnCard}</h3>
                            <h3>{formatCardNumber(card.cardNumber)}</h3>
                        </div>
                    ))}

                    {!isAddCardDisabled && (
                        <div
                            onClick={() => setShowAddCardForm(true)}
                            className="card flex justify-center items-center flex-col cursor-pointer bg-zinc-600 rounded-lg h-36 w-56"
                        >
                            <h3>+</h3>
                            <h3>Add Card</h3>
                        </div>
                    )}

                    {isAddCardDisabled && (
                        <div className="flex justify-center items-center flex-col cursor-not-allowed bg-gray-400 rounded-lg h-36 w-56">
                            <h3>Limit Reached</h3>
                        </div>
                    )}
                </div>

                {showAddCardForm && (
                    <AddCardForm 
                        onClose={() => setShowAddCardForm(false)} 
                        onCardAdded={handleCardAdded} 
                    />
                )}

                <div className="flex py-5 border items-center text-zinc-400 justify-center gap-10 rounded-lg">
                    <div className="flex items-center justify-center gap-3 py-4">
                        <div className="box bg-blue-200 h-8 w-8 rounded-lg"></div>
                        <div className="summ leading-tight">
                            <h5>Total Limit</h5>
                            <h3 className="text-2xl font-black">₹{totalLimit}</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="box bg-gray-200 h-8 w-8 rounded-lg"></div>
                        <div className="summ leading-tight">
                            <h5>Total Expenditure</h5>
                            <h3 className="text-2xl font-black">₹{totalExpenditure}</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="box bg-yellow-200 h-8 w-8 rounded-lg"></div>
                        <div className="summ leading-tight">
                            <h5>Total Balance</h5>
                            <h3 className="text-2xl font-black">₹{totalBalance}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
