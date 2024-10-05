import { useState } from "react";
import { instance } from "../../utils/axios";

const AddCardForm = ({ onClose, onCardAdded }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [bankName, setBankName] = useState("");
    const [limit, setLimit] = useState("");
    const [usedAmount, setUsedLimit] = useState("");

    const token = localStorage.getItem("token");

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); 
        const formattedCardNumber = value.match(/.{1,4}/g)?.join(" ") || ""; 
        setCardNumber(formattedCardNumber);
    };

    const handleExpiryDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); 
        if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`; 
        }
        setExpiryDate(value);
    };

    const validateForm = () => {
        const cardDigits = cardNumber.replace(/\s/g, "").length;
        const currentYear = new Date().getFullYear() % 100; 
        const currentMonth = new Date().getMonth() + 1;
        const [expMonth, expYear] = expiryDate.split("/").map(Number);

        
        const limitValue = parseFloat(limit);
        const usedAmountValue = parseFloat(usedAmount);

        if (cardDigits !== 16) {
            alert("Card number must be 16 digits.");
            return false;
        }
        if (cvv.length !== 3) {
            alert("CVV must be exactly 3 digits.");
            return false;
        }
        if (isNaN(expMonth) || isNaN(expYear) || expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
            alert("Expiry date is invalid.");
            return false;
        }
        if (nameOnCard.length < 3 || nameOnCard.length > 20) {
            alert("Name on card must be between 3 and 20 characters.");
            return false;
        }
        if (bankName.length < 3 || bankName.length > 35) {
            alert("Bank name must be between 3 and 35 characters.");
            return false;
        }
        if (usedAmountValue > limitValue) {
            alert("Used amount cannot exceed the card limit.");
            return false;
        }
        if (limitValue <= 0) {
            alert("Card limit must be greater than zero.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        
        const newCard = {
            cardNumber,
            expiryDate,
            cvv,
            nameOnCard,
            bankName,
            limit: parseFloat(limit), 
            usedAmount: parseFloat(usedAmount), 
        };

        try {
            await instance.post("/add-card", newCard, {
                headers: { Authorization: `Bearer ${token}` },
            });

            onCardAdded(newCard); 
            onClose(); 
        } catch (error) {
            console.error("Error adding card:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-white text-2xl mb-4">Add Credit Card</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                        maxLength="19"
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        maxLength="3"
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        required
                        maxLength="5"
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Name on Card"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        required
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Bank Name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="number"
                        placeholder="Limit of Card (₹)"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        required
                        min="1"
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="number"
                        placeholder="Used Limit (₹)"
                        value={usedAmount}
                        onChange={(e) => setUsedLimit(e.target.value)}
                        required
                        min="0"
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded w-full mb-2"
                    >
                        Add Card
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-red-500 text-white p-2 rounded w-full"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCardForm;
