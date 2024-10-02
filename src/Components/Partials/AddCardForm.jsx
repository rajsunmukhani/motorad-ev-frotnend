import { useState } from "react";
import { instance } from "../../utils/axios";

const AddCardForm = ({ onClose, userId, onCardAdded }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [bankName, setBankName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cardData = {
            cardNumber,
            expiryDate,
            cvv,
            nameOnCard,
            bankName,
        };

        try {
            const response = await instance.post('/add-card', cardData);
            onCardAdded(response.data);
            onClose();
        } catch (error) {
            console.error('Error adding card:', error);
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
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
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
